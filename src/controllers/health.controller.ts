import { Request, Response } from "express";

import { successResponse } from "../utils/apiResponse";
import { prisma } from "../config/prisma";
import { redis } from "../config/redis";

export async function healthController(
  _req: Request,
  res: Response
) {
  let database = "ok";
  let redisStatus = "ok";

  try {
    await prisma.$queryRaw`SELECT 1`;
  } catch (error) {
    database = "error";
    console.error("Database health check failed:", error);
  }

  try {
    await redis.ping();
  } catch (error) {
    redisStatus = "error";
    console.error("Redis health check failed:", error);
  }

  const healthy =
    database === "ok" &&
    redisStatus === "ok";

  return successResponse(
    res,
    healthy
      ? "Server is healthy"
      : "Server is unhealthy",
    {
      api: "ok",
      database,
      redis: redisStatus,
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    },
    healthy ? 200 : 503
  );
}