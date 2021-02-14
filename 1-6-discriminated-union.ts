{
    //Union -> Discriminated Union 개선 전
    //function: login -> success, fail
    type SuccessState = {
        response: {
            body: string;
        };
    };

    type FailState = {
        reason: string;
    };

    type LoginState = SuccessState | FailState;

    //promise
    // function login(id: string, password: string): Promise<LoginState>{
    //     return {
    //         response: {
    //             body: 'logged in!',
    //         },
    //     };
    // }
    function login(id: string, password: string): LoginState{
        return {
            response: {
                body: 'logged in!',
            },
        };
    }

    //printLoginState(state)
    //success -> 성공이모티콘과 response의 body 출력
    //fail -> 실패이모티콘과 실패이유 출력
    function printLoginState(state: LoginState){
        //response라는 key가 state 안에 있다면
        if('response' in state){
            console.log(`◎ ${state.response.body}`);
        }else{
            console.log(`▲ ${state.reason}`);
        }
    }

}