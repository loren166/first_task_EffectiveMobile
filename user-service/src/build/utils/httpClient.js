"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const httpClient = axios_1.default.create({
    baseURL: 'http://localhost:3001',
    timeout: 5000,
    headers: {
        'Content-Type': "application/json"
    }
});
exports.default = httpClient;
