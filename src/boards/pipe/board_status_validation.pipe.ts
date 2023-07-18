import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards.model';

// "extends" is used to create a subclass that inherits properties and methods from a parent "class"
// "implements" is used to create a class that implements an "interface"
export class BoardStatusValidationPipe implements PipeTransform {
    transform(value: any): any {
        value = value.toUpperCase();

        if (!Object.values(BoardStatus).includes(value)) {
            throw new BadRequestException(
                `${value} isn't in the status options`,
            );
        }

        return value;
    }
}
