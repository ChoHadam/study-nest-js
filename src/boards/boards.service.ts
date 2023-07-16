import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateBoardDTO } from './DTO/create-board.dto';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(createBoardDTO: CreateBoardDTO): Board {
        const { title, description } = createBoardDTO;
        const board: Board = {
            id: uuidv4(),
            title,
            description,
            status: BoardStatus.PUBLIC,
        };
        this.boards.push(board);
        return board;
    }
}
