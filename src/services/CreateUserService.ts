import { instanceToPlain } from "class-transformer";
import { hash } from 'bcryptjs';
 
import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {
    async execute({ name, email, admin = false, password }: IUserRequest) {
        if (!email) {
            throw new Error("Invalid email address");
        }
        
        const userAlreadyExists = await UserRepository.findOneBy({email: email});
        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8);
        const user = UserRepository.create({
            name: name,
            email: email, 
            admin: admin, 
            password: passwordHash
        });
        
        await UserRepository.save(user);
        return instanceToPlain(user);
    }
}

export { CreateUserService }