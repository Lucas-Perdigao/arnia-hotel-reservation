import { fakeUser, fakeUsersArray } from "../__mock__/fake-user-model";
import { fakeUserRepository } from "../__mock__/fake-user-repository";
import { UserService } from "./user-service";

const userService = new UserService(fakeUserRepository)


describe('UserService', ()=> {
    describe('getAll', () => {
        it('Should return an array of users', async () => {
            const users = await userService.getAll()
            expect(users).toEqual(fakeUsersArray)
        })

        it('Should return an error if no user is found', async () => {
            jest.spyOn(fakeUserRepository, 'getAll').mockResolvedValueOnce([])
            await expect(userService.getAll()).rejects.toThrow('Users not found.')
        })
    })

    describe('getByEmail', () => {
        it('Should return an user', async () => {
            const user = await userService.getByEmail(fakeUser.email)
            expect(user).toEqual(fakeUser)
        })

        it('Should return an error if no user is found', async () => {
            jest.spyOn(fakeUserRepository, 'getByEmail').mockResolvedValueOnce(null)
            await expect(userService.getByEmail('batata@potato.com')).rejects.toThrow('User not found.')
        })
    })
})