import { DataSource } from 'typeorm';

export const sqliteDataSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'sqlite',
    database: 'src/database/db.sqlite',
    entities: ["src/entities/*.ts"],
    migrations: ['src/database/migrations/*.ts'],
});

sqliteDataSource.initialize();