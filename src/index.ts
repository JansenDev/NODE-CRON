import cron from "node-cron";

console.log("Hello world");

cron.schedule("1-5 * * * * *", () => {
    console.log("CronTab run 🚀");
}, { name: "Janssen cron" })

