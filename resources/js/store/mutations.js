// it is update state

export const SET_PRODUCTS = (state, products) => {
    state.products = products;
};
export const SET_CORRUNCY = (state, currency) => {
    state.currentCurrenncy = currency;
};
export const SET_PRODUCT = (state, product) => {
    state.product = product;
};
export const CHANGE_TIMER = (state, timer) => {
    state.startTimer = timer;
};
// we size
export const ADD_TO_CART = (
    state,
    { product, quantity, price, avilableTarget, sizeTarget, sizeCm }
) => {
    if (state.cart.length == 0) {
        state.startTimer = true;
    }
    var productInCart = state.cart.find(item => {
        if (item.product.id == product.id) {
            return item.product;
        }
    });

    if (productInCart) {
        productInCart.quantity++;
    } else {
        state.cart.push({
            product,
            quantity,
            price,
            avilableTarget,
            sizeTarget,
            sizeCm
        });
    }
    // localStorage.setItem("cart", JSON.stringify(state.cart));
};

export const SET_CART = (state, cartItems) => {
    state.cart = cartItems;
    if (state.cart.length != 0) {
        setTimeout(() => (state.startTimer = true), 10000);
    }
};

export const DELETE_PRODUCT = (state, index) => {
    // let cart = ;
    // console.log(cart);
    // localStorage.setItem("cart", JSON.stringify(cart));
    return state.cart.splice(index, 1);
};

export const DECREASE_PRODUCT = (state, { product, quantity }) => {
    let productInCart = state.cart.find(item => {
        // console.log("yes");
        return item.product.id == product.id;
    });

    if (productInCart) {
        productInCart.quantity -= 1;

        if (productInCart.quantity <= 0) {
            productInCart.quantity = 0;
        }
    }
    // localStorage.setItem("cart", JSON.stringify(state.cart));
};

export const DELETE_CART = state => {
    state.cart = [];
};
export const UPDATE_LOCAL_STORAGE = state => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
};
// export const ADD_TO_CART = (state, { product, quantity, price,avilableTarget,sizeTarget }) => {

//     var ckeckAvaiable=0
//     var check = false
//     var productInCart = state.cart.find(item => {
//         if(item.avilableTarget>=2){
//             ckeckAvaiable=item.avilableTarget
//              console.log(item.avilableTarget)

//         if(  item.product.id == product.id && item.sizeTarget ==sizeTarget){
//             check =true
//            return item.product
//         }
//         else{
//             check = false
//         }

//     }

//     });

//         if(ckeckAvaiable>=0){

//             if (check==true) {
//                 productInCart.quantity++;
//                 productInCart.avilableTarget--
//                 if(productInCart.avilableTarget==0){
//                     productInCart.avilableTarget=0
//                 }

//             } if(check==false) {

//                 state.cart.push({
//                     product,
//                     quantity,
//                     price,
//                     avilableTarget,
//                     sizeTarget
//                 });

//             }

//         }

// };
