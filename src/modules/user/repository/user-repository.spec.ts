import { fakeObjectId } from "../../../__mock__/fake-object-id";
import { fakeUser, fakeUserModel, fakeUsersArray } from "../__mock__/fake-user-model";
import { fakeUserRepository } from "../__mock__/fake-user-repository";
import { UserService } from "../services/user-service";
import { UserRepository } from "./user-repository";

const userRepository = new UserRepository(fakeUserModel)

describe('UserRepository', () => {
    describe('getAll', () => {
        it('Should return a array of users', async () => {
            const users = await userRepository.getAll()
            expect(users).toEqual(fakeUsersArray)
        })

        it('Should call the find method from the user model', async () => {
            await userRepository.getAll()
            expect(fakeUserModel.find).toHaveBeenCalled()
        })
    })

    describe('getByEmail', () => {
        it('Should return a user with the same email passed as argument', async () => {
            const user = await userRepository.getByEmail(fakeUser.email)
            expect(user).toEqual(fakeUser)
        })
    })
})