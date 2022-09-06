import { Request, Response } from 'express';
import { UserRepository } from '../../model/user/UserRepository';

export class CreateUserController {

    async handle( request : Request, response : Response ) {

        const { name, email, password } = request.body;
        const userRepository = new UserRepository();

        const user = await userRepository.create({name, email, password});
        return user;

    }

}