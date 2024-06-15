import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import {dataSource} from "./database/connection";
import router from "./Routes/routes";

dotenv.config()

const app: express.Application = express();
app.use(cors())
app.use(express.json())
app.use('/', router)

const PORT = process.env.PORT

dataSource
    .then(() => {
        app.listen(PORT, () => {
            console.log('Пользовательский сервис успешно запущен!')
        })
    })
    .catch((err) => {
        console.error('Возникла ошибка при запуске пользовательского сервиса:', err)
    })