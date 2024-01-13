import { Router } from 'express'
import { userModule } from '../factories/user-factory'

export const userRoutes = Router()

//localhost:3030/user
userRoutes.get('/user', userModule.getAll.bind(userModule))

userRoutes.get('/user/:id', userModule.getById.bind(userModule))

userRoutes.get('/user/find', userModule.getByEmail.bind(userModule))

userRoutes.post('/user', userModule.create.bind(userModule))

userRoutes.put('/user/:id', userModule.update.bind(userModule))

userRoutes.put('/user/delete/:id', userModule.softDelete.bind(userModule))