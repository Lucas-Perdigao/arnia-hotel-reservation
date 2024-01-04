import { Model, isValidObjectId } from "mongoose";
import { User } from "../model/user-model";
import { CreateUserDTO } from "../dtos/create-user-dto";
import { UpdateUserDTO } from "../dtos/update-user-dto";
import { IUserRepository } from "./user-repository-interface";

export class UserRepository implements IUserRepository {
    constructor(private userModel: Model<User>){}

    async getAll(): Promise<Array<User>>{
        const users = await this.userModel.find({deletedAt: null})
        return users
    }

    async getByEmail(email: string): Promise<User>{
        const user = await this.userModel.findOne({email: email, deletedAt: null})

        if(!user){
            throw new Error(`User not found.`)
        }
        return user
    }

    async getById(id: string): Promise<User>{
        if(isValidObjectId(id)){
            throw new Error(`Id ${id} is not valid.`)
        }

        const user = await this.userModel.findOne({_id: id, deletedAt: null})

        if(!user){
            throw new Error(`User not found.`)
        }

        return user
    }

    async create(userData: CreateUserDTO): Promise<User>{
        const newUser = await this.userModel.create(userData)
        return newUser
    }

    async update(id: string, newUserData: UpdateUserDTO): Promise<User>{
        if(isValidObjectId(id)){
            throw new Error(`Id ${id} is not valid.`)
        }

        const user = this.getById(id)

        if(!user){
            throw new Error('User not found.')
        }

        const updatedUser = await this.userModel.findByIdAndUpdate(id, newUserData, { new: true })

        if(!updatedUser){
            throw new Error(`User not found.`)
        }

        return updatedUser
    }

    async softDelete(id: string): Promise<User>{
        if(isValidObjectId(id)){
            throw new Error(`Id ${id} is not valid.`)
        }

        const deletedUser = await this.userModel.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true })

        if(!deletedUser){
            throw new Error(`User not found.`)
        }
        
        return deletedUser
    }
}   