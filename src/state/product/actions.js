import axios from 'axios';

export function getAll(dispatch) {
    axios.get('products.json')
        .then(response => {
            dispatch(setAll(response.data))
        }).catch(err => {
            dispatch(setError(err.message))
        });

    return {
        type: 'GET_ALL'
    }
}

export function setAll(products) {
    return {
        type: 'GET_ALL_SUCCESS',
        products: products
    }
}

export function setError(err) {
    return {
        type: 'GET_ALL_ERROR',
        message: err,
        products: []
    }
}