import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {env} from "../../config/env";
import { prisma } from "../../config/prisma";
import { generateAccessToken, AccessTokenPayload,generateRefreshToken } from "../../utils/jwt";

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
    throw new Error("Email is already registered");
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const customerRole = await prisma.role.findUnique({
    where: {
      name: "CUSTOMER",
    },
  });

  if (!customerRole) {
    throw new Error("CUSTOMER role not found");
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
    throw new Error("Invalid email or password")
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
    throw new Error("Invalid refresh token");
  }

  // 2. Check whether the token was revoked
  if (storedToken.revoked) {
    throw new Error("Refresh token has been revoked");
  }

  // 3. Check whether the database expiration has passed
  if (storedToken.expiresAt < new Date()) {
    throw new Error("Refresh token has expired");
  }

  // 4. Verify the JWT itself
  try {
    jwt.verify(token, env.JWT_REFRESH_SECRET);
  } catch {
    throw new Error("Invalid refresh token");
  }

  // 5. Create a new access token
  const accessToken = generateAccessToken({
    userId: storedToken.user.id,
    email: storedToken.user.email,
  });

  return {
    accessToken,
  }




}