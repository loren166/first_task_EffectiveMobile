"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
const userController = new userController_1.Controller();
router.post('/users', (req, res) => {
    userController.createUserController(req, res);
});
router.put('/users/:id', (req, res) => {
    userController.updateUserController(req, res);
});
router.get('/users', (req, res) => {
    userController.getUsersController(req, res);
});
exports.default = router;
