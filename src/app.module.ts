import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
    // forRoot안에 넣어준 설정은 모든 Sub 모듈들에 적용 된다.
    imports: [
        BoardsModule,
        TypeOrmModule.forRoot(typeORMConfig),
        ConfigModule.forRoot(),
    ],
})
export class AppModule {}
