export const setAddToCart = (item) => {
    return{
        type: "ADD_TO_CART",
        payload: item,
    };
};

export const setRemoveFromCart = () => {
    return{
        type: "REMOVE_FROM_CART",
    };
};