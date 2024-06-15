import {User} from "../entities/user";
import {CreateUserDto} from "../dtos/CreateUserDto";
import {AppDataSource} from "../ormconfig";
import {UpdateUserDto} from "../dtos/UpdateUserDto";
import {NotificationService} from "./notificationService";


export class UserService {
    private userRepository = AppDataSource.getRepository(User);
    private notifyService = new NotificationService();

    async createUser(userData: CreateUserDto): Promise<User> {
        try {
            const newUser = User.fromDto(userData)
            const savedUser =  await this.userRepository.save(newUser);
            await this.notifyService.notifyUserCreated(savedUser)
            return savedUser
        } catch (err) {
            console.error('Error at saving user: ', err)
            throw new Error('Failed to create user')
        }
    }

    async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
        try {
            await this.userRepository.update(id, updateUserDto);
            const updateUser =  await this.userRepository.findOneBy({ id });
            if (updateUser) {
                await this.notifyService.notifyUserUpdated(updateUser)
                return updateUser
            } else {
                throw new Error('User not found')
            }
        } catch (err) {
            console.error('Cannot update user:', err)
            throw new Error('Failed to update user')
        }
    }

    async getUsers(): Promise<User[]> {
        try {
            return await this.userRepository.find();
        } catch (err) {
            console.error('Error at fetching users:', err)
            throw new Error('Failed to fetch users')
        }
    }
}