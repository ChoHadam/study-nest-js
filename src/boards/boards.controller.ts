import {
    Body,
    Controller,
    Get,
    Post,
    Delete,
    Param,
    Patch,
} from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDTO } from './DTO/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService) {}

    @Get()
    getAllBoard(): Board[] {
        return this.boardService.getAllBoards();
    }

    @Get('/:id')
    getBoard(@Param('id') id: string): Board {
        return this.boardService.getBoard(id);
    }

    @Post()
    createBoard(@Body() createBoardDTO: CreateBoardDTO) {
        return this.boardService.createBoard(createBoardDTO);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        return this.boardService.deleteBoard(id);
    }

    @Patch('/:id/status')
    UpdateBoard(
        @Param('id') id: string,
        @Body('status') status: BoardStatus,
    ): Board {
        return this.boardService.updateBoard(id, status);
    }
}
