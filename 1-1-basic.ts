{
    //Javascript 변수 선언
    //let es6 값 재할당 가능
    //var -> 값 재할당 가능, 호이스팅 등 여러가지 문제가 있기에 쓰면 좋지 않음
    let name = 'hello';
    name = 'hi';
    //const 한 번 선언하고 할당한 뒤 값 재할당 불가능
    const number = 5;
    //number = 5;

    
    /**
     * Javascript 타입
     * >Primitive 타입(한 가지의 심플한) : number, string, boolean, bigint, symbol, null, undefined
     * >Object 타입(여러 가지의 복합적인) : function, array...
     * 
     */

     //number 숫자 타입 : 정수, 마이너스 값, 소수점 가능
     const num:number = -6;

     //string
     const str:string = 'hello';

     //boolean
     const boal:boolean = false;

     //undefined : 값이 있는 지 없는 지 결정되지 않은 상태
    let undefinedAge: undefined; //이렇게 쓰지 않음 안좋은 코드
    let numberAge: number | undefined;
    undefinedAge = undefined;
    numberAge = 1;

     //null : 비어있다는 것이 정해진 상태
     let person: null; //이렇게 쓰지 않음 안좋은 코드
     let person2: string | null;

     //unknown : 어떤 데이터든 다 담을 수 있음, 무슨 타입인지 알 수 없는 잘 모르겠어 라는 타입, 안좋은 타입 잘 쓰지말자
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    //any : 어떤 것이든 다 담을 수 있음, 안좋은 타입 잘 쓰지말자
    let anything: any = 0;
    anything = 'hello';

    //void : 함수에서 아무런 값 리턴하지 않음, 변수에는 잘 안씀
    function print(): void{
        console.log('hello');
        return;
    }
    let unusable: void = undefined; //변수에 void 할 경우 undefined만 할당 가능하기 때문에 활용도가 떨어짐

    //never : 어플리케이션에서 예상치못한 핸들링하지못할 에러 던질 때 혹은 while문 계속 돌 때 등등
    //함수에서 리턴할 계획 전혀 없다고 알려줌
    function throwError(message: string): never{
       //에러 메세지 -> 서버로 보내서 로그 남기고 -> throw new Error
       throw new Error(message);
       
       //while true로 빙글빙글 돌 때
    //    while(true){
           
    //    }
   }

   //object : 원시 타입 제외한 모든 object 타입 모두 담을 수 있음, 안좋은 타입 잘 쓰지말자 
   //object도 어떤 object 타입인 지 명시해주는 것이 좋음
   let obj: object;
   function acceptSomeObject(obj: object){
    acceptSomeObject({ name: 'ellie' });
    acceptSomeObject({ animal: 'dog' });
   }
}