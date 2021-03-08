{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    //클래스 : 관련된 속성과 함수들을 묶어서 어떤 모양의 데이터가 될 건지 정의하는 것
    //클래스 이용해서 데이터 넣어서 object 만들 수 있음
    //오브젝트마다 새로 만들어져야 하는 것 -> 멤버변수
    //클래스 레벨에서 함께 공유될 수 있는 것 -> static (멤버변수 뿐만 아니라 함수에도 적용할 수 있음)
    class CoffeeMaker{
        //멤버변수
        static BEANS_GRAMM_PER_SHOT:number = 7; //변하지 않는 숫자 object마다 동일한 값 공유되는 값 -> object 만들 때마다 중복해서 생성되지 않도록 메모리 절약하도록 클래스 자체에만 넣어줌 static 키워드 붙임 -> class level 
        coffeeBeans: number = 0; //instance (object) level
        
        //class가지고 object instance 만들 때 항상 처음 호출되는 함수 -> constructor
        constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans; //생성 시 원하는 만큼 커피콩 전달
        }

        //static 키워드로 Math 처럼 class level 에서 함수 호출
        static makeMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
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
    const maker = new CoffeeMaker(32); 
    console.log(maker);

    const maker2 = new CoffeeMaker(14); 
    console.log(maker2);
 
    //static makeMachine 함수 이용해서 생성 (ex) Math.abs , Math.PI 도 class level에 있는 것들이라 new 하지 않고도 사용할 수 있음
    const maker3 = CoffeeMaker.makeMachine(3);
    //비효율적, 말이 안되지만 makeMachine에 static이 붙어있지 않다면 maker2 를 new 로 생성한 다음 아래처럼 object에서 불러야함
    //maker2.makeMachine

    

}