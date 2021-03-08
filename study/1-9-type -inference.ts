{
    //type inference 타입 추론 좋지 않음 타입명시, 확정이 더 좋음, 어떤 경우에만 생략할건지 일관성있게 프로젝트 초기에 가이드라인 정하는 것이 좋음
    let text = 'hello'; //타입 따로 명시하지 않아도 오류나지 않음
    //타입 생략할 수 있음, 자동으로 string으로 타입 유추할 수 있음

    //message에 타입 명시하지 않을 경우 어떤 값이든 전달 가능
    //함수 인자에 any 라는 값이 할당됨 
    //any는 나쁨, 어떤 타입인지 정확하게 명시해주는 것이 좋음
    //타입 명시안해도 디폴트 값을 넘겨주면 디폴트 값 타입에 따라 타입 정해짐
    function print(message = 'hello'){
        console.log(message);
    }

    function numberAdd(x: number, y: number){
        return x + y; //x,y가 숫자이기 떄문에 return 값이 숫자로 유추됨
    }

    //추론을 통한 또다른 추론
    const result = add(1,2); //add는 숫자를 리턴하기 때문에 자동으로 숫자로 유추됨



}