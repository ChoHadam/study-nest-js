// DTO(Data Transfer Object): 계층간 데이터 교환을 위한 객체
// 1. 사용 이유: 데이터 유효성을 체크하는데 효율적이고, 안정적인 코드를 작성하는데 도움이 된다.
// 예를 들면 정말 많은 property를 가지고 있는데, 한곳에서 수정이 일어나면? 여러곳을 다 일일히 찾아가서 바꿔줘야한다.
// 2. 생성 방법: interface나 class를 사용하면 되는데, class가 선호된다. 클래스는 런타임에서 작동하기 때문에 파이프 같은 기능을 이용할 때 유용하기 때문.

import { IsNotEmpty } from 'class-validator';

export class CreateBoardDTO {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}
