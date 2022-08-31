import { REMOVE_ITEM, ADD_TO_CART, INCREASE, DECREASE, CHECKOUT, CLEAR } from "./CartTypes"

export const sumItems = (cartItems) => {
    Storage(cartItems);
    let itemCount = cartItems.reduce(
        (total, produc) => total + product.quantity,
        0
    );
    let total = cartItems
        .reduce((total, product) => total + product.price * product.quantity, 0)
        .toFixed(2);
    return { itemCount, total };
};