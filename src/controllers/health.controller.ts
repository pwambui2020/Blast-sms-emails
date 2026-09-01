import {Request,Response} from "express";
import {successResponse} from "../utils/apiResponse";

export function healthController(
    _req: Request,
    res: Response
){
    return successResponse(
        res,
        "Server is healthy",
        {
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
        }
    );
}