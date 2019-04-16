const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            };
        case 'LOGIN_FAILED':
            console.log('login failed');
            return {
                ...state,
                authError: 'Login failed'
            };
        case 'SIGNUP_SUCCESS':
            console.log('SignUp success');
            return {
                ...state,
                authError: null
            };
        case 'SIGNUP_FAILED':
            console.log('SignUp failed');
            return {
                ...state,
                authError: action.err.message
            };
        case 'SIGNOUT_SUCCESS':
            console.log('SignOut success');
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_FAILED':
            console.log('SignOut failed');
            return {
                ...state,
                authError: 'SignOut failed'
            };
        default:
            return state;
    }
};


export default authReducer;