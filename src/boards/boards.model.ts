// 모델을 정의하기 위해서는 class, interface를 이용한다.
// interface: 변수의 타입만을 체크한다.
// class: 변수의 타입도 체크하고, 인스턴스 또한 생성할 수 있다.

export interface Board {
    id: string;
    title: string;
    description: string;
    status: BoardStatus;
}

export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
}
