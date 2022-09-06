import { prismaClient } from "../../database/client";
import { User } from "./User";

export class UserRepository {

    async create({ name, email, password } : User) : Promise<User> {

        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password
            }
        });

        return user;

    }

}