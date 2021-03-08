{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    const BEANS_GRAMM_PER_SHOT:number = 7; //커피 한 샷 당 얼마나 커피콩 필요한 지 gramm

    let coffeeBeans: number = 0; //커피콩 얼마나 있는 지 gramm
    function makeCoffee(shots: number): CoffeeCup{
        if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT){
            throw new Error('Not enough coffee beans!');
        }
        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
        return{
            shots,
            hasMilk: false,
        }
    }
    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);
}