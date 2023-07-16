import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { Board } from './boards.model';
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
}
