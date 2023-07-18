import { Injectable, NotFoundException } from '@nestjs/common';
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

    getBoard(id: string): Board {
        const board = this.boards.find((board) => board.id === id);
        if (!board) {
            throw new NotFoundException(`Cannot Find board with id '${id}'`);
        }
        return board;
    }

    deleteBoard(id: string): void {
        this.getBoard(id);
        this.boards = this.boards.filter((board) => board.id != id);
    }

    updateBoard(id: string, status: BoardStatus): Board {
        const board = this.getBoard(id);

        // 강의에 없었던 조건문 추가 (Patch 메소드 특성 고려)
        if (status != null) {
            board.status = status;
        }

        return board;
    }
}
