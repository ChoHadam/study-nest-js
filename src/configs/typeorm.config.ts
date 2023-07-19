import { TypeOrmModuleOptions } from '@nestjs/typeorm';

//TypeOrmModuleOptions 타입 지정 안하면 타입 에러 발생
export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT) || 5432,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    entities: [],
    synchronize: true, // Setting synchronize: true shouldn't be used in production
};
