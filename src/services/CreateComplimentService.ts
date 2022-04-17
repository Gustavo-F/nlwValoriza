import { ComplimentRepository } from "../repositories/ComplimentRepository";
import { UserRepository } from "../repositories/UserRepository";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver:string;
    message: string;
}

class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
        const userReceiverExists = await UserRepository.findOneBy({id: user_receiver});

        if(user_sender === user_receiver) {
            throw new Error('Incorrect user receiver!');
        }
        
        if (!userReceiverExists) {
            throw new Error('User Receiver does not exists!');
        }

        const compliment = await ComplimentRepository.create({
            tag_id: tag_id,
            message: message,
            user_sender: user_sender,
            user_receiver: user_receiver,
        });

        await ComplimentRepository.save(compliment);
        return compliment;
    }
}

export { CreateComplimentService };