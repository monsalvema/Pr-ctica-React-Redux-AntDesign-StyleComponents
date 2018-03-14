const initialState = {
    message: '',
    products: []
}

export function productsList(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL':
            return {...state}
            break;
        case 'GET_ALL_SUCCESS':
            return {...state, products: action.products}
            break;
        case 'GET_ALL_ERROR':
            return {...state, message: action.message}
            break;
        default:
            return state;
    }
}

