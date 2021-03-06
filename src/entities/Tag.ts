import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Expose } from "class-transformer";
import { v4 as uuid } from "uuid";

@Entity('tags')
class Tag {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;


    @Expose({ name: 'name_custom' })
    nameCustom(): string {
        return `#${this.name}`
    }

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Tag };
