const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log("Login Error", action);
            return{
                ...state,
                authError: action.err.message
            }
        case 'LOGIN_SUCESS':
            console.log("Login success");
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log("Signout success");
            return state
        case 'SIGNUP_ERROR':
                console.log("Signup Error", action.err.message);
                return{
                    ...state,
                    authError: 'Signup Failed'
                }
            case 'SIGNUP_SUCESS':
                console.log("Signup success");
                return{
                    ...state,
                    authError: null
                }
        default:
            return{
                state
            }
    }
}

export default authReducer;