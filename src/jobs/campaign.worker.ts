import {Worker} from "bullmq";
import {redis} from "../config/redis";

export const campaignWorker = new Worker(
    "campaign",
    async (job) => {
        console.log("processing campaign job:", job.id);
        console.log("job data:", job.data);
    },
    {
        connection: redis,
    }
);

campaignWorker.on("completed", (job) => {
    console.log(`Campaign job ${job.id} completed`);
});

campaignWorker.on("failed", (job, err) => {
    console.error(`Campaign job ${job?.id} failed with error:`, err);
});

