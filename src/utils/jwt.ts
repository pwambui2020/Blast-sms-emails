import jwt from "jsonwebtoken";
import {env} from "../config/env";

export interface AccessTokenPayload {
    userId:string;
    email:string;
}

export function generateAccessToken(payload: AccessTokenPayload) {
    return jwt.sign(payload, env.JWT_ACCESS_SECRET, {
        expiresIn: "15m"
    });
}

export function generateRefreshToken(userId: string){
    return jwt.sign(
        {userId},
        env.JWT_REFRESH_SECRET,
        {
            expiresIn: "7d"
        }
    );
}