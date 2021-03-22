{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    //클래스 : 관련된 속성과 함수들을 묶어서 어떤 모양의 데이터가 될 건지 정의하는 것
    //클래스 이용해서 데이터 넣어서 object 만들 수 있음
    //오브젝트마다 새로 만들어져야 하는 것 -> 멤버변수
    //클래스 레벨에서 함께 공유될 수 있는 것 -> static (멤버변수 뿐만 아니라 함수에도 적용할 수 있음)

    //외부에서 보이면 안되거나 설정하면 안되는 것 은닉 -> encapsulation
    //다양한 레벨의 정보 은닉 가능 -> public, private, protected 이용
    //따로 지정하지 않으면 public 
    //private 어떤 누구라도 class 외부에서 보거나 접근 불가
    //protected 외부 접근 불가하지만 class 상속한 자식클래스에서는 접근 가능
    class CoffeeMaker{
        //외부에서 보이지 않도록 private
        private static BEANS_GRAMM_PER_SHOT:number = 7; //변하지 않는 숫자 object마다 동일한 값 공유되는 값 -> object 만들 때마다 중복해서 생성되지 않도록 메모리 절약하도록 클래스 자체에만 넣어줌 static 키워드 붙임 -> class level 
        //멤버변수
        //외부에서 설정못하도록 private, fillCoffeeBeans 함수 이용하여 내부 상태 변경
        private coffeeBeans: number = 0; //instance (object) level
        
        //class가지고 object instance 만들 때 항상 처음 호출되는 함수 -> constructor
        //static 키워드 붙여서 object 만들 수 있는 함수 (ex) makeMachine 제공한다면 constuctor 함수를 private으로 지정해서 static함수 사용 권장, 생성자 사용 금지
        private constructor(coffeeBeans: number){
            //this.coffeeBeans = coffeeBeans; //생성 시 원하는 만큼 커피콩 전달
            this.fillCoffeeBeans(coffeeBeans); //코드 수정
        }

        //static 키워드로 Math 처럼 class level 에서 함수 호출
        static makeMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }

        //외부에서 바로 받아서 설정하지말고 내부 함수로 전달 받는 인자 유효한 지 검사 후 안전하게 커피콩 넣어주기
        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        //함수
        makeCoffee(shots: number): CoffeeCup{
            //class안의 멤버변수 접근 -> this, static은 클래스 이름
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return{
                shots,
                hasMilk: false,
            }
        }

    }

    //const maker = new CoffeeMaker() // <- ()로 생성자 호출, new와 class이름으로 instance생성
    //인자 전달 가능
    //const maker = new CoffeeMaker(32); // 생성자 함수 private
    const maker = CoffeeMaker.makeMachine(3);
    //유효하지 않은 값, object를 유효하지 않은 상태로 만들 수 있는 위험한 상황, 외부에 제약사항 주기 위해 encapsulation
    //maker.coffeeBeans = -34; //private 변경 이후 직접 설정 불가
    maker.fillCoffeeBeans(3); 
    console.log(maker);
 
    //static makeMachine 함수 이용해서 생성 (ex) Math.abs , Math.PI 도 class level에 있는 것들이라 new 하지 않고도 사용할 수 있음
    const maker3 = CoffeeMaker.makeMachine(3);
    //비효율적, 말이 안되지만 makeMachine에 static이 붙어있지 않다면 maker2 를 new 로 생성한 다음 아래처럼 object에서 불러야함
    //maker2.makeMachine

    

    class User {
        /*
        //생성자와 멤버변수 따로 두었을 때
        private firstName: string;
        private lastName: string;
        get fullName(): string{
            return `${this.firstName} ${this.lastName}`; //setter와 getter는 멤버변수처럼 사용가능, 계산해야할 때, 호출될 때 값 계산 유용하게 사용 가능
        }
        constructor(firstName: string, lastName: string){
            this.firstName = firstName;
            this.lastName = lastName;
            //this.fullName = `${firstName} ${lastName}`; //getter로 바꾸기 전에는 한 번 할당된 스티브잡스 그대로
        }
        
        */

       //생성자에 간편하게 접근제어자 추가하여 멤버변수 간단하게 표현
       get fullName(): string{
        return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age(): number{
            return this.internalAge;
        }
        set age(num: number){
            if(num < 0){
                //에러 유효성검사
            }
            this.internalAge = num;
        }
        constructor(private firstName: string, private lastName: string){}
    }
    /*
    //생성자와 멤버변수 따로 두었을 때
    const user = new User('Steve', 'jobs');
    console.log(user.fullName);
    user.firstName = 'Oh'; //getter로 바꾸기 전에는 한 번 할당된 스티브잡스 그대로 //getter로 바꿔도 멤버변수부르듯이 사용가능 함수로호출안해도됨
    console.log(user.fullName);
    */

    //생성자에 간편하게 접근제어자 추가하여 멤버변수 간단하게 표현
    const user = new User('Steve', 'jobs');
    user.age = 6; //setter를 통해 private internalAge 값을 내부적으로 변경할 수 있다.
    console.log(user.fullName); 





}