import { Controller, Get } from '@nestjs/common';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService) {}

    @Get()
    getAllBoard(): Board[] {
        return this.boardService.getAllBoards();
    }
}

// 아래 코드와 동일하게 동작한다.
// export class BoardsController {
//     boardService : BoardsService
//     constructor(boardService: BoardsService) {
//         this.boardService = boardService;
//     }
// }
