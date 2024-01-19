import { LoginDTO } from "../dtos/login-dto";

export interface IAuthService {
  login(loginData: LoginDTO): Promise<string>
}