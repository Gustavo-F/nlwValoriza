import { instanceToPlain } from "class-transformer";

import { TagRepository } from "../repositories/TagRepository";

class ListTagsService {
    async execute() {
        const tags = await TagRepository.find();
        return instanceToPlain(tags);
    }
}

export { ListTagsService };