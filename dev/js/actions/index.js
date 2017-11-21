export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const selectUserProducts = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_PRODUCTS_SELECTED',
        payload: user
    }
};

export const BasicUserInfo = (userId) => {
    return {
        type: 'BASIC_USER_INFO',
        payload: userId
    }
};

export const showProducts = () => {
    console.log("You want every product");
    return {
        type: 'ALL_PRODUCTS_SELECTED',
    }
};

export const selectProduct = (product) => {
    console.log("You clicked on product: ", product.id);
    return {
        type: 'PRODUCT_SELECTED',
        payload: product
    }
};