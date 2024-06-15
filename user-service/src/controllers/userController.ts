import {Request, Response} from "express";
import {UserService} from "../services/userService";


export class Controller {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async createUserController(req: Request, res: Response): Promise<void> {
        try {
           const newUser = await this.userService.createUser(req.body)

           res.status(201).json(newUser)
        } catch (err) {
            res.status(500).json({error: err})
        }
    }
    async updateUserController(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const updateUser = await this.userService.updateUser(parseInt(id), req.body)
            if (!updateUser) {
                res.status(404).json({error: 'User not found'})
                return;
            }
            res.status(200).json(updateUser)
        } catch (err) {
            res.status(500).json({error: err})
        }
    }
    async getUsersController(req: Request, res: Response): Promise<void> {
        try {
            const users = await this.userService.getUsers()
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json({error: err})
        }
    }
}