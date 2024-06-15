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
exports.UserService = void 0;
const user_1 = require("../entities/user");
const ormconfig_1 = require("../ormconfig");
const notificationService_1 = require("./notificationService");
class UserService {
    constructor() {
        this.userRepository = ormconfig_1.AppDataSource.getRepository(user_1.User);
        this.notifyService = new notificationService_1.NotificationService();
    }
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = user_1.User.fromDto(userData);
                const savedUser = yield this.userRepository.save(newUser);
                yield this.notifyService.notifyUserCreated(savedUser);
                return savedUser;
            }
            catch (err) {
                console.error('Error at saving user: ', err);
                throw new Error('Failed to create user');
            }
        });
    }
    updateUser(id, updateUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.userRepository.update(id, updateUserDto);
                const updateUser = yield this.userRepository.findOneBy({ id });
                if (updateUser) {
                    yield this.notifyService.notifyUserUpdated(updateUser);
                    return updateUser;
                }
                else {
                    throw new Error('User not found');
                }
            }
            catch (err) {
                console.error('Cannot update user:', err);
                throw new Error('Failed to update user');
            }
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.userRepository.find();
            }
            catch (err) {
                console.error('Error at fetching users:', err);
                throw new Error('Failed to fetch users');
            }
        });
    }
}
exports.UserService = UserService;
