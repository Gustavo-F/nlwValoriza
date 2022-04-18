import { instanceToPlain } from "class-transformer";

import { UserRepository } from "../repositories/UserRepository";

class ListUsersService {
    async execute() {
        const users = await UserRepository.find();
        return instanceToPlain(users);
    }
}

export { ListUsersService };