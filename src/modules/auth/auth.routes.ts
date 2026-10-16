import {Router} from "express";
import { registerController, loginController, meController,refreshTokenController,logoutController } from "./auth.controller";
import { asyncHandler } from "../../utils/asyncHandler";
import { authenticate } from "../../middlewares/auth.middleware";
import { authLimiter} from "../../middlewares/rateLimiter";

const router = Router();

router.post(
    "/register",
    authLimiter,    
     asyncHandler(registerController)
);

router.post(
    "/login",
    authLimiter,
    asyncHandler(loginController)
);

router.get (
    "/me",
    authenticate,
    meController
)

router.post(
    "/refresh",
    asyncHandler(refreshTokenController)
);

router.post(
    "/logout",
    asyncHandler(logoutController)
);

export default router;