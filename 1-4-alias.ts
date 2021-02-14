{
    //Type Aliases 새로운 타입 직접 정의
    type Text = string;
    const name: Text = 'ellie';
    const address: Text = 'korea';
    type Num = number;
    //원시타입 뿐만아니라 오브젝트타입도 정의 가능
    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'ellie',
        age: 12,
    }

    //String Literal types 타입을 문자열로 지정
    //값 자체를 타입으로 결정
    type Name = 'name';
    let ellieName: Name;
    ellieName = 'name';

    type JSON = 'json'; //json만 할당 가능
    const json: JSON = 'json';

    type Boal = true; //true만 할당 가능
    
}