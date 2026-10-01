import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {env} from "../../config/env";
import { prisma } from "../../config/prisma";
import { generateAccessToken, AccessTokenPayload,generateRefreshToken } from "../../utils/jwt";
import {AppError} from "../../utils/AppError";

interface RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginInput {
  email: string;
  password: string;
}

export async function registerUser(data: RegisterInput) {
  const { firstName, lastName, email, password } = data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new AppError(409,"Email is already registered");
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const customerRole = await prisma.role.findUnique({
    where: {
      name: "CUSTOMER",
    },
  });

  if (!customerRole) {
    throw new AppError(500,"CUSTOMER role not found");
  }

  const user = await prisma.$transaction(async (tx) => {
    const newUser = await tx.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: passwordHash,

        roles: {
          create: {
            roleId: customerRole.id,
          },
        },

        credits: {
          create: {
            smsCredits: 100,
            emailCredits: 100,
          },
        },
      },
    });

    return newUser;
  });


  const { password: _, ...safeUser } = user;

  return safeUser;
}

export async function loginUser(data: LoginInput) {
  const{email, password} = data;

  const user = await prisma.user.findUnique({
    where: {
      email,
    }
  });

  if (!user) {
    throw new AppError(401,"Invalid email or password")
  }

  const passwordValid = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordValid) {
    throw new Error ("Invalid email or password")
  }  

  const{ password: _, ...safeUser } = user;

  const accessToken = generateAccessToken({
    userId: user.id,
    email: user.email,
  });

  const refreshToken = generateRefreshToken(user.id);

  await prisma.refreshToken.create({
    data: {
      token: refreshToken,
      userId: user.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
    },
  });

  return {
    user: safeUser,
    accessToken,
    refreshToken,
  }
};

export async function refreshAccessToken(token: string){
  const storedToken = await prisma.refreshToken.findUnique({
    where: {
      token,
    },
    include: {
      user: true,
    },
  });

  if (!storedToken){
    throw new AppError(401,"Invalid refresh token");
  }

  if (storedToken.revoked) {
    throw new AppError(401,"Refresh token has been revoked");
  }

  if (storedToken.expiresAt < new Date()) {
    throw new AppError(401,"Refresh token has expired");
  }

  try {
    jwt.verify(token, env.JWT_REFRESH_SECRET);
  } catch {
    throw new AppError(401,"Invalid refresh token");
  }

  const accessToken = generateAccessToken({
    userId: storedToken.user.id,
    email: storedToken.user.email,
  });

  return {
    accessToken,
  }
}

export async function logoutUser(refreshToken: string) {

  const storedToken = await prisma.refreshToken.findUnique({
    where: {
      token: refreshToken,
    },
  });

  if (!storedToken) {
    throw new AppError(401,"Invalid refresh token");
  }

  await prisma.refreshToken.update({
    where: {
      id: storedToken.id,
    },
    data: {
      revoked: true,
    },
  });
  return true;
}