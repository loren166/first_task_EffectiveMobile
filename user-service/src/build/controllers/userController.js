"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const userService_1 = require("../services/userService");
class Controller {
    constructor() {
        this.userService = new userService_1.UserService();
    }
    createUserController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield this.userService.createUser(req.body);
                res.status(201).json(newUser);
            }
            catch (err) {
                res.status(400).json({ error: err });
            }
        });
    }
    updateUserController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const updateUser = yield this.userService.updateUser(parseInt(id), req.body);
                if (!updateUser) {
                    res.status(400).json({ error: 'User not found' });
                    return;
                }
                res.status(200).json(updateUser);
            }
            catch (err) {
                res.status(400).json({ error: err });
            }
        });
    }
    getUsersController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userService.getUsers();
                res.status(200).json(users);
            }
            catch (err) {
                res.status(400).json({ error: err });
            }
        });
    }
}
exports.Controller = Controller;
