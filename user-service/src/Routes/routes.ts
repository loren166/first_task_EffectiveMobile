import express, {Request, Response, Router} from "express";
import {Controller} from "../controllers/userController";


const router: Router = express.Router();
const userController = new Controller();

router.post('/users', (req: Request, res: Response) => {
    userController.createUserController(req, res)
})

router.put('/users/:id', (req: Request, res: Response) => {
    userController.updateUserController(req, res)
})

router.get('/users', (req: Request, res: Response) => {
    userController.getUsersController(req, res)
})

export default router;