import { Router } from "express";
import { healthController } from "../controllers/health.controller";
// import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// router.post(
//   "/register",
//   asyncHandler(registerController)
// );

router.get("/", healthController)

export default router;