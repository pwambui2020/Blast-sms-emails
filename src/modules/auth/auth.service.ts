import bcrypt from "bcrypt";
import { prisma } from "../../config/prisma";

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

  // 4. Create the user, role assignment, and credits
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
  return safeUser;
}