import axios from "axios";

export const getProducts = ({ commit }) => {
    axios.get(`${location.origin}/api/products`).then(response => {
        commit("SET_PRODUCTS", response.data);
    });
};

export const getProduct = ({ commit }, productId) => {
    axios.get(`${location.origin}/api/products/${productId}`).then(response => {
        commit("SET_PRODUCT", response.data);
    });
};

export const addProductToCart = (
    { commit },
    { product, quantity, price, avilableTarget, sizeTarget, sizeCm }
) => {
    commit("ADD_TO_CART", {
        product,
        quantity,
        price,
        avilableTarget,
        sizeTarget,
        sizeCm
    });
    commit("UPDATE_LOCAL_STORAGE");
    //   axios.post("${location.origin}/api/cart", {
    //     product_id: product.id,
    //     quantity,
    //   });
};

export const getCartItems = ({ commit }) => {
    axios.get(`${location.origin}/api/cart`).then(response => {
        commit("SET_CART", response.data);
    });
};

export const deleteCartItem = ({ commit }, index) => {
    // console.log(index);
    //   axios.delete(`${location.origin}/api/cart/${product.id}`);
    commit("DELETE_PRODUCT", index);
    commit("UPDATE_LOCAL_STORAGE");
};

export const decreaseProduct = ({ commit }, { product, quantity }) => {
    // axios.delete(`${location.origin}/api/cart`);
    commit("DECREASE_PRODUCT", { product, quantity });
    commit("UPDATE_LOCAL_STORAGE");
};

export const clearCartItems = ({ commit }) => {
    // axios.delete(`${location.origin}/api/cart`);
    commit("DELETE_CART");
    commit("UPDATE_LOCAL_STORAGE");
};
