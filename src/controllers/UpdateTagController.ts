import { Request, Response } from "express";

import { UpdateTagService } from "../services/UpdateTagService";

class UpdateTagController {
    async handle(request: Request, response: Response) {
        const { tag_id } = request.params;
        const { new_name } = request.body;
        const updateTagService = new UpdateTagService(); 

        const tag = await updateTagService.execute(tag_id, new_name);
        return response.json(tag);
    }
}

export { UpdateTagController };