import { sqliteDataSource as dataSource } from "../database";
import { Tag } from "../entities/Tag";

const TagRepository = dataSource.getRepository(Tag);

export { TagRepository };
