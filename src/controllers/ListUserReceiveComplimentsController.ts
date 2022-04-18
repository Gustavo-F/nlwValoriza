import { Request, Response } from "express";

import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {
    async handle(request: Request, response: Response) {
        const listComplimentsService = new ListUserReceiveComplimentsService();
        const compliments = await listComplimentsService.execute(request.user_id);

        return response.json(compliments);
    }
}

export { ListUserReceiveComplimentsController };