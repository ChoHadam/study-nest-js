import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './boards.entity';

// @EntityRepository is deprecated
@Injectable()
export class BoardRepository {
    constructor(
        @InjectRepository(Board)
        private readonly boardRepository: Repository<Board>,
    ) {}
}

// @EntityRepository를 사용했을 때 작성할 수 있는 코드
//
// @EntityRepository(Board)
// export class BoardRepository extends Repository<Board> {}
