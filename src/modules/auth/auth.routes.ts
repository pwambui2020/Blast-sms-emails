import {Router} from "express";
import { registerController, loginController, meController } from "./auth.controller";
import { asyncHandler } from "../../utils/asyncHandler";
import { authenticate } from "../../middlewares/auth.middleware";

const router = Router();

router.post(
    "/register",    
     asyncHandler(registerController)
);

router.post(
    "/login",
    asyncHandler(loginController)
);

router.get (
    "/me",
    authenticate,
    meController
)

export default router;