{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    //인터페이스로 추상화 극대화
    interface CoffeeMaker{
        makeCoffee(shots: number): CoffeeCup;
    }

    class CaffeLatteMachine{
        private static BEANS_GRAMM_PER_SHOT:number = 7; 
        private coffeeBeans: number = 0; 
        
        private constructor(coffeeBeans: number){
            this.fillCoffeeBeans(coffeeBeans);
        }

        static makeMachine(coffeeBeans: number): CoffeeMakerBySM{
            return new CoffeeMakerBySM(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean(){
            console.log('cleaning the machine...');
        }

        private grindBeans(shots: number){
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMakerBySM.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMakerBySM.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void{
            console.log('heating up...');
        }

        private extract(shots: number): CoffeeCup{
            console.log(`Pulling ${shots} shots...`);
            return{
                shots,
                hasMilk: false,
            };
        }

        //인터페이스에 정의한 함수 무조건 구현해야함
        makeCoffee(shots: number): CoffeeCup{
            this.grindBeans(shots);
            this.preheat();
            
            return this.extract(shots);
        }

    }

    class CoffeeMakerBySM implements CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT:number = 7; 
        private coffeeBeans: number = 0; 
        
        private constructor(coffeeBeans: number){
            this.fillCoffeeBeans(coffeeBeans);
        }

        static makeMachine(coffeeBeans: number): CoffeeMakerBySM{
            return new CoffeeMakerBySM(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean(){
            console.log('cleaning the machine...');
        }

        private grindBeans(shots: number){
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMakerBySM.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMakerBySM.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void{
            console.log('heating up...');
        }

        private extract(shots: number): CoffeeCup{
            console.log(`Pulling ${shots} shots...`);
            return{
                shots,
                hasMilk: false,
            };
        }

        //인터페이스에 정의한 함수 무조건 구현해야함
        makeCoffee(shots: number): CoffeeCup{
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }

    }

    const maker: CoffeeMakerBySM = CoffeeMakerBySM.makeMachine(32);
    //어떤 메소드를 먼저 호출해야하지? 사용하는 사람(팀원, 내가만든클래스이용하는사람)이 간편하게 사용할 수 있도록 =>
    //각 언어가 제공하는 레벨에 따라 => 접근제어자 encapsulation/interface/정보은닉 통해 추상화
    //간단하게 필요한 함수만 노출 => '추상화' => 사용자가 알 필요없는 함수에 접근제어자 붙이기 / 인터페이스 활용하기 
    maker.fillCoffeeBeans(32);
    maker.makeCoffee(2);

    const maker2: CoffeeMaker = CoffeeMakerBySM.makeMachine(32);
    //maker2.fillCoffeeBeans(32); //사용불가
    maker2.makeCoffee(2);



    
    class AmateurUser{
        constructor(private machine: CoffeeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }


    //동일한 CoffeeMakerBySM object 이지만 class에 제한한 인터페이스에 따라 함수사용범위 달라짐
    const newMaker: CoffeeMakerBySM = CoffeeMakerBySM.makeMachine(32);
    const amateur = new AmateurUser(newMaker);



}