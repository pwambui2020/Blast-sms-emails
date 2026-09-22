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