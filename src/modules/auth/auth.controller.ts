import { Request, Response } from 'express';
import { registerSchema,loginSchema } from './auth.validator';
import { loginUser, registerUser,refreshAccessToken,logoutUser } from "./auth.service";
import { successResponse } from '../../utils/apiResponse';
import { AuthenticatedRequest } from '../../middlewares/auth.middleware';

export async function registerController(
    req: Request,
    res: Response
){
    const data = registerSchema.parse(req.body);

    const user = await registerUser(data);

    return successResponse(
        res,
        "User registered successfully",
        user,
        201
    );
}
export async function loginController (
    req: Request,
    res: Response
){
    const data = loginSchema.parse(req.body);

    const user = await loginUser(data);

    return successResponse(
        res,
        "Login successfully",
        user,
        200
    );
}

export function meController(
    req: AuthenticatedRequest,
    res: Response
){
    return successResponse(
        res,
        "Authenicated user",
        req.user
    );
}

export async function refreshTokenController (
    req: Request,
    res: Response
){

    const {refreshToken} = req.body;

    if (!refreshToken) {
        return res.status(401).json({
            success:false,
            message: "Refresh token is required",
        });
    }

    const data = await refreshAccessToken(refreshToken);

    return successResponse (
        res,
        "Access token refreshed successfully",
        data
    );
}

export async function logoutController(
    req: Request,
    res: Response
    
) {

    const {refreshToken} = req.body;

    if(!refreshToken) {
        return res.status(400).json({
            succes: false,
            message: "Refresh token is required",
        });
    }

    await logoutUser(refreshToken);
    
    return successResponse(
        res,
        "Logout successful"
    );
}