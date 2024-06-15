"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
class CreateUserDto {
    constructor(firstName, lastName, age, gender) {
        this.first_name = firstName;
        this.last_name = lastName;
        this.age = age;
        this.gender = gender;
    }
}
exports.CreateUserDto = CreateUserDto;
