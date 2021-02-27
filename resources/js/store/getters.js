export const cartItemCount = state => {
    return state.cart.length;
};

export const cartTotalPrice = state => {
    let total = 0;
    state.cart.forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
};
export const cartTotalPriceSAR = state => {
    let total = 0;
    state.cart.forEach(item => {
        total += item.product.M_price_sar * item.quantity;
    });
    return total;
};
export const currency = state => state.currentCurrenncy;
export const startTimer = state => state.startTimer;
