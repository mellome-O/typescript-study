{
    //Union -> Discriminated Union 개선 전
    //function: login -> success, fail
    type SuccessState = {
        //동일한 키
        result: 'success';
        response: {
            body: string;
        };
    };

    type FailState = {
        result: 'fail';
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
            result: 'success',
            response: {
                body: 'logged in!',
            },
        };
    }

    //printLoginState(state)
    //success -> 성공이모티콘과 response의 body 출력
    //fail -> 실패이모티콘과 실패이유 출력
    function dcUnionPrintLoginState(state: LoginState){
        //state.result -> success or fail
        if(state.result === 'success'){
            console.log(`◎ ${state.response.body}`);
        }else{
            console.log(`▲ ${state.reason}`);
        }
    }

}