import { sqliteDataSource as dataSource } from "../database/index";
import { Compliment } from "../entities/Compliment";

const ComplimentRepository = dataSource.getRepository(Compliment);

export { ComplimentRepository };