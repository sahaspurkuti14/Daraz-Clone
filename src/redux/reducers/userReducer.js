const initialState = {
    user:[],
};

export const userReducer = (state=initialState , action) => {
    switch(action.type){
        case "USER_DISPLAY":
            return {...state , user: action.payload} ;

        default:
            return state;
    }
}

export const userLogout = (state , action) => {
    switch(action.type){
        case "USER_LOGOUT":
            return {...state , user: initialState} ;

        default:
            return state;
    }
}