import { UserController } from "../controllers/user-controller";
import { UserModel } from "../model/user-model";
import { UserRepository } from "../repository/user-repository";
import { UserService } from "../services/user-service";

class UserFactory {
    static getInstance(){
        const userRepository = new UserRepository(UserModel)
        const userService = new UserService(userRepository)
        const userController = new UserController(userService)
        return userController
    }
}

export const userModule = UserFactory.getInstance()