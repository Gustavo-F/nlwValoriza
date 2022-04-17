import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, admin }: IUserRequest) {
        if (!email) {
            throw new Error("Invalid email address");
        }
        
        const userAlreadyExists = await UserRepository.findOneBy({email: email});
        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const user = UserRepository.create({name, email, admin})
        await UserRepository.save(user);

        return user;
    }
}

export { CreateUserService }