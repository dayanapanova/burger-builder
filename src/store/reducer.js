import * as actionTypes from './action';

const initialState = {
    ingridients: {
        salad: 0,
        meat: 0,
        cheese: 0,
        bacon: 0
    },
    totalPrice: 4
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGRIDIENT:
            return {
                ...state,
                ingridients: {
                    ...state.ingridients,
                    [action.ingridientName]: state.ingridients[action.ingridientsName] + 1,
                }
            };
        case actionTypes.REMOVE_INGRIDIENT: 
            return {
                ...state,
                ingridients: {
                    ...state.ingridients,
                    [action.ingridientName]: state.ingridients[action.ingridientsName] - 1,
                }
            };
        default:
            return state;
    }
};

export default reducer;