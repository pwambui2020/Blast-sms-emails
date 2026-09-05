import {Queue} from "bullmq";
import {redis} from "../config/redis";

export const campaignQueue = new Queue("campaign", {
    connection: redis,
})