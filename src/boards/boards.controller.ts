import {
    Body,
    Controller,
    Get,
    Post,
    Delete,
    Param,
    Patch,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDTO } from './DTO/create-board.dto';
import {} from 'class-validator';

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
    /**
     * A pipe is a class annotated with the @Injectable() decorator, which implements the PipeTransform interface.
     * Pipes have two typical use cases: data transformation & data validation
     * https://docs.nestjs.com/pipes
     */
    @UsePipes(ValidationPipe) // one of the nestJS built-in pipes
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
