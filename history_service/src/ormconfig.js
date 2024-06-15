import {DataSource} from "typeorm";
import dotenv from "dotenv";
import History from "./Entities/history.js";

dotenv.config()

export const AppDataSource = new DataSource( {
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [History],
    migrations: [],
    subscribers: [],
});