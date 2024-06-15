import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import {dataSource} from "./database/connection.js";
import historyRouter  from "./routes/routes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', historyRouter)

dataSource
    .then(() => {
        app.listen(3001, () => {
            console.log('History service running on port 3001')
        })
    })
    .catch((err) => {
        console.error('Failed to run history service', err)
    })