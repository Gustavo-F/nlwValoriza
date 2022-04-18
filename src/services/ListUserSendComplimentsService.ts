import { ComplimentRepository } from "../repositories/ComplimentRepository";

class ListUserSendComplimentsService {
    async execute(user_id: string) {
        const compliments = await ComplimentRepository.find({
            where: { user_sender: user_id },
            relations : ['userReceiver', 'tag']
        });
        return compliments;
    }
}

export { ListUserSendComplimentsService };