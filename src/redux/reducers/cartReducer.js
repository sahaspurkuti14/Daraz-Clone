export const initialState = {
    cart : [],
};

export const getCartTotal = (cart) =>
cart?.reduce((amount,item) => item.price + amount, 0);

export const addToCart = (state=initialState , action) => {
    switch (action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                cart: [...state.cart , action.payload],
            };

        default:
            return state;
    }
}

export const removeFromCart = (state=[] , action) => {
    switch (action.type){
        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];

            if (index >= 0) {
                newCart.splice(index, 1);

            } else {
                console.warn(
                `Cant remove product (id: ${action.id}) as its not in cart!`
                )
            }

            return {
                ...state,
                cart: newCart
            };

            default:
            return state;
    }
}