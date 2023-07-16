import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(title, description): Board {
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
