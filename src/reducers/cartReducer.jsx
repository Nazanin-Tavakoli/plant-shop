const initialState = {
    items: [],
    totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const updatedItems = [...state.items, action.payload];
            const updatedPrice = updatedItems.reduce((total, item) => total + parseFloat(item.offPrice || item.price), 0);
            return {
                ...state,
                items: updatedItems,
                totalPrice: updatedPrice,
            };
        default:
            return state;
    }
};

export default cartReducer;
