import { Tag } from "../entities/Tag";
import { TagRepository } from "../repositories/TagRepository";

class CreateTagService {
    async execute(name: string) {
        if (!name) {
            throw new Error('Invalid tag name');
        }

        const tagAlreadyExist = await TagRepository.findOneBy({name: name});
        if (tagAlreadyExist) {
            throw new Error('Tag already exists');
        }

        const tag = TagRepository.create({name: name})
        await TagRepository.save(tag);

        return tag;
    }
}

export { CreateTagService };