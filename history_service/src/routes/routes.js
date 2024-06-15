import express from "express";
import historyControllers from "../controllers/historyControllers.js";


const historyRouter = express.Router()

historyRouter.post('/log', historyControllers.logAction)

historyRouter.get('/', historyControllers.getHistory)

export default historyRouter;