import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

export class AuthMiddleware {
  static async handler(req: Request, res: Response, next: NextFunction){
    const { headers } = req

    if(!headers.authorization){
      throw new Error('Unauthorized.')
    }

    
    // const date = '2002/11/05'
    // split -> ['2002','11', '05']
    // reverse -> ['05', '11', '2002']
    // join -> '05-11-2002'
    // const formattedDate = date.split('/').reverse().join('-')
    
    // 'Bearer aspdfu9okalsdfu[-13490opjkdf8asdfjasdf7ausdf'
    // ['Bearer', 'aspdfu9okalsdfu13490opjkdf8asdfjasdf7ausdf']
    const [, token] = headers.authorization.split(" ")

    try {
      jwt.verify(token, process.env.JWT_SECRET_KEY as string)
    } catch (error: any) {
      res.status(401).json('Unauthorized')
    }

    next()
  }
}