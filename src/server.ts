import app from "./app";
import { env } from "./config/env";
import { logger } from "./config/logger"; 
import { prisma } from "./config/prisma";

async function startServer() {
  try {
    await prisma.$connect();

    logger.info("Connected to the database");

    app.listen(env.PORT, () => {
      logger.info(
        `Server running on http://localhost:${env.PORT}`
    );
    });

  } catch (error) {
    logger.error(error,"Error connecting to the database");

    await prisma.$disconnect();

    process.exit(1);
  }
}

startServer();