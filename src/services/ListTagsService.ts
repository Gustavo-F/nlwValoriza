import { TagRepository } from "../repositories/TagRepository";

class ListTagsService {
    async execute() {
        const tags = await TagRepository.find();
        return tags;
    }
}

export { ListTagsService };