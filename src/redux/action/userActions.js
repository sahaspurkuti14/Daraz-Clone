export const setUser = (user) => {
    return{
        type: "SET_PRODUCTS",
        payload: user,
    };
};

export const setLogout = () => {
    return{
        type: "SET_LOGOUT",
    };
};