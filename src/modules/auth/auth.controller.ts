import { Request, Response } from 'express';
import { registerSchema,loginSchema } from './auth.validator';
import { loginUser, registerUser } from "./auth.service";
import { successResponse } from '../../utils/apiResponse';

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
        
    );
}