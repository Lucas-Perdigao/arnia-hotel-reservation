import { Router } from 'express'
import { userModule } from '../factories/user-factory'
import { AuthMiddleware } from '../../../middlewares/auth-middleware'

export const userRoutes = Router()

//localhost:3030/user
userRoutes.get('/user', AuthMiddleware.handler, userModule.getAll.bind(userModule))

userRoutes.get('/user/:id', AuthMiddleware.handler, userModule.getById.bind(userModule))

userRoutes.get('/user/find', AuthMiddleware.handler, userModule.getByEmail.bind(userModule))

userRoutes.post('/user', userModule.create.bind(userModule))

userRoutes.put('/user/:id', AuthMiddleware.handler, userModule.update.bind(userModule))

userRoutes.put('/user/delete/:id', AuthMiddleware.handler, userModule.softDelete.bind(userModule))