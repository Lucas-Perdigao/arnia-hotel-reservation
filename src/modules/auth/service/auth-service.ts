import { IUserRepository } from "../../user/repository/user-repository-interface";
import { LoginDTO } from "../dtos/login-dto";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { IAuthService } from "./auth-service-interface";


// 1- Verificar se o usuário existe, e se existir, buscar ele
// 2- Verificar se a senha do usuário buscado confere com a senha enviada pelo login
// 3- Enviar um token de autorização de volta pro usuário

export class AuthService implements IAuthService{
  constructor(private userRepository: IUserRepository){}

  async login(loginData: LoginDTO): Promise<string>{
    const user = await this.userRepository.getByEmail(loginData.email)
    
    if(!user || !user.password){
      throw new Error('User not found.')
    }

    const userPassword = user.password as string

    //param1: senha enviada pelo login (não-criptografada), ex: 'admin1234'
    //param2: senha salva no banco (criptografada), ex: 'sa98dfas'
    // admin1234 = admin1234
    const isPasswordValid = await bcrypt.compare(loginData.password, userPassword)

    if(!isPasswordValid){
      throw new Error('Invalid email/password.')
    }


    user.password = null
    delete user.password

    const payload = {...user}
    const secretKey = process.env.JWT_SECRET_KEY as string
    const options = { expiresIn: '1d'}

    const token = jwt.sign(payload, secretKey, options)

    return token
  }
}