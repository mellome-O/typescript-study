{
    // enum

    //Javascript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2 })
    const dayOfToday = DAYS_ENUM.MONDAY;

    //Typescript
    enum Days{
        //값 정하지 않으면 0부터 순차적으로
        Monday, //0
        Tuesday, //1
        Wednesday, //2
        Thursday = 'td', //문자열은 다음 enum에 자동지정이 어려워 직접 지정해줘야함
        Friday = 222,
        Saturday = 333,
        Sunday = 'sd',
    }

    console.log(Days.Tuesday);
    const day = Days.Tuesday; //타입추론이용해서 타입 생략됨
    //const day: Days = Days.Saturday; //사실은 Days라는것을 할당받을 수 있는 타입, enum으로 타입 지정된 변수에 다른 어떤 숫자를 할당할 수 있는 것이 문제


    //enum 보다 union 타입으로 대체사용하여 상수를 다루자
    //대체사용불가한 경우 1가지 -> 모바일 클라이언트 안드로이드나 ios kotlin, swift는
    //사용자데이터를 제이슨으로 묶어서 다른 클라이언트에 보내야하는
    //모바일클라이언트에서 사용하는 네이티브 프로그래밍 언어에서는 
    //유니언타입 표현 방법 없기때문에 이넘타입 사용
    type UnionDays = 'Monday' | 'Tuesday' | 'Wednesday';

    let unionDay: UnionDays = 'Monday';
    unionDay = 'Monday';
}