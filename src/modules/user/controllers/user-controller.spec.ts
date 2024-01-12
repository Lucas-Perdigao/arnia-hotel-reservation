import { mockRequest, mockResponse } from "../../../__mock__/fake-request-response";
import { fakeUser, fakeUsersArray } from "../__mock__/fake-user-model";
import { fakeUserService } from "../__mock__/fake-user-service";
import { UserController } from "./user-controller";

const userController = new UserController(fakeUserService)
const req = mockRequest()
const res = mockResponse()

//.toHaveBeenCalled -> se foi chamada
//.toHaveBeenCalledWith ->  se foi chamada com o parâmetro esperado

//res.json se refere ao método
//res.json() se refere à chamada do método

describe('UserController', () => {
    describe('getAll', () => {
        it('Should return an array of users', async () => {
            await userController.getAll(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeUsersArray)
        })

        it('Should return a status 200', async () => {
            await userController.getAll(req, res)
            expect(res.status).toHaveBeenCalledWith(200)
        })

        it('Should return a status 500', async () => {
            jest.spyOn(fakeUserService, 'getAll').mockImplementationOnce(()=> Promise.reject('Users not found.'))
            await userController.getAll(req, res)
            expect(res.status).toHaveBeenCalledWith(500)
        })
    })

    describe('getByEmail', () => {
        it('Should return an user', async () => {
            req.query.email = fakeUser.email
            await userController.getByEmail(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeUser)
        })

        it('Should return a status 200', async () => {
            req.query.email = fakeUser.email
            await userController.getByEmail(req, res)
            expect(res.status).toHaveBeenCalledWith(200)
        })

        it('Should return a status 500', async () => {
            jest.spyOn(fakeUserService, 'getByEmail').mockImplementationOnce(()=> Promise.reject('User not found.'))
            await userController.getAll(req, res)
            expect(res.status).toHaveBeenCalledWith(500)
        })
    })

    describe('getById', () => {
        it('Should return an user', async () => {
            req.params.id = fakeUser._id
            await userController.getById(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeUser)
        })

        it('Should return a status 200', async () => {
            req.params.id = fakeUser._id
            await userController.getById(req, res)
            expect(res.status).toHaveBeenCalledWith(200)
        })

        it('Should return a status 500', async () => {
            jest.spyOn(fakeUserService, 'getById').mockImplementationOnce(()=> Promise.reject('User not found.'))
            await userController.getById(req, res)
            expect(res.status).toHaveBeenCalledWith(500)
        })
    })

    describe('create', () => {
        it('Should return an user', async () => {
            req.body = fakeUser
            await userController.create(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeUser)
        })

        it('Should return a status 200', async () => {
            req.body = fakeUser
            await userController.create(req, res)
            expect(res.status).toHaveBeenCalledWith(200)
        })

        it('Should return a status 500', async () => {
            jest.spyOn(fakeUserService, 'create').mockImplementationOnce(()=> Promise.reject('Cannot create user.'))
            await userController.create(req, res)
            expect(res.status).toHaveBeenCalledWith(500)
        })
    })

    describe('update', () => {
        it('Should return an user', async () => {
            req.params.id = fakeUser._id
            req.body = fakeUser
            await userController.update(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeUser)
        })

        it('Should return a status 200', async () => {
            req.params.id = fakeUser._id
            req.body = fakeUser
            await userController.update(req, res)
            expect(res.status).toHaveBeenCalledWith(200)
        })

        it('Should return a status 500', async () => {
            jest.spyOn(fakeUserService, 'update').mockImplementationOnce(()=> Promise.reject('Cannot create user.'))
            await userController.update(req, res)
            expect(res.status).toHaveBeenCalledWith(500)
        })
    })

    describe('softDelete', () => {
        it('Should return an user', async () => {
            req.params.id = fakeUser._id
            await userController.softDelete(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeUser)
        })

        it('Should return a status 200', async () => {
            req.params.id = fakeUser._id
            await userController.softDelete(req, res)
            expect(res.status).toHaveBeenCalledWith(200)
        })

        it('Should return a status 500', async () => {
            jest.spyOn(fakeUserService, 'softDelete').mockImplementationOnce(()=> Promise.reject('Cannot create user.'))
            await userController.softDelete(req, res)
            expect(res.status).toHaveBeenCalledWith(500)
        })
    })
})