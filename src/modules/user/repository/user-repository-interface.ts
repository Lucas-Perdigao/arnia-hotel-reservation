import { User } from "../model/user-model";
import { CreateUserDTO } from "../dtos/create-user-dto";
import { UpdateUserDTO } from "../dtos/update-user-dto";

export interface IUserRepository {
    getAll(): Promise<Array<User>>

    getByEmail(email: string): Promise<User>

    getById(id: string): Promise<User>

    create(userData: CreateUserDTO): Promise<User>

    update(id: string, newUserData: UpdateUserDTO): Promise<User>

    softDelete(id: string): Promise<User>   
}