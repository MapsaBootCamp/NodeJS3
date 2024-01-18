import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "dev"}` });

export const { PORT, DB_HOST, DB_PORT, DB_DATABASE } = process.env;
