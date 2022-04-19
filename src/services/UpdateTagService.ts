import { instanceToPlain } from "class-transformer";

import { TagRepository } from "../repositories/TagRepository";

class UpdateTagService {
    async execute(id: string, new_name: string) {
        let tag = await TagRepository.findOneBy({id: id});
        tag.name = new_name;
        
        const updatedTag = await TagRepository.save(tag);
        return instanceToPlain(updatedTag);
    }
}

export { UpdateTagService };