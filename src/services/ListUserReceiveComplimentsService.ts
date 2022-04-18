import { ComplimentRepository } from "../repositories/ComplimentRepository";

class ListUserReceiveComplimentsService {
    async execute(user_id: string) {
        const compliments = await ComplimentRepository.find({
            where: { user_receiver: user_id },
            relations : ['userSender', 'tag']
        });
        return compliments;
    }
}

export { ListUserReceiveComplimentsService };