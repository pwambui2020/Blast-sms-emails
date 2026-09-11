import express from "express";
import cors from "cors";
import helmet from "helmet";

import compression from "compression";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";
import {requestLogger} from "./middlewares/requestLogger";
import { apiLimiter } from "./middlewares/rateLimiter";

import healthRoutes from "./routes/health.routes"
import { swaggerUi, swaggerDocument } from "./config/swagger";

const app = express();

app.use(helmet()); //security headers

app.use(cors()); //allows approved origins

app.use(compression()); //compress responses

app.use(express.json()); //parse JSON request bodies

app.use(requestLogger);

app.use(apiLimiter);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.use("/api/v1/health", healthRoutes);

app.use(notFound);

app.use(errorHandler);

export default app;