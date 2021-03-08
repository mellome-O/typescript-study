{
    //type assertions 타입 강요, 좋지않음
    //불가피하게 사용해야할 경우
    function jsStrFunc(): any{
        return 'hello';

    }
    const result = jsStrFunc();
    //result.length; //타입을 any로 해놓은 경우 length 사용불가

    console.log((result as string).length); //result를 문자열처럼 사용할거야
    //실제로 숫자를 리턴할경우 에러발생 X 어플리케이션 죽지는 않음, 실행 하는 순간 undefined 라고 나옴
    //100% 장담할 때만 assertion 사용하기
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1));
    //에러발생, 어플리케이션 종료됨

    function findNumbers(): number[] | undefined{
        return undefined;
    }

    const numbers = findNumbers();
    numbers!.push(2); //무조건 배열이라 확신하고 싶을 경우 변수 뒤에 느낌표 작성
    //const numbers = findNumbers()!; 함수뒤에 붙여도됨
    //옵셔널 파라미터와 반대되는 개념
    //function findNumbers(optional?: number)

    const button = document.querySelector('class')!;
    //querySelector 요소 존재하면 요소 리턴, 없으면 null 리턴
    //button.nodeValue 시 안내 문구 뜸
    
}