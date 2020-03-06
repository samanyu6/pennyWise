
export const CREATE_WALLET = () =>{
    return {
        type: 'CREATE_WALLET'
    }
}

export const ADD_EXPENSE = (payload) =>{
    return {
        type: 'ADD_EXPENSE',
        payload: payload
    }
}

export const DELETE_WALLET = (payload) =>{
    return {
        type: 'DELETE_WALLET',
        payload: payload
    }
}

export const DELETE_EXPENSE = (payload) =>{
    return {
        type: 'DELETE_EXPENSE',
        payload: payload
    }
}

export const CALC_TOTAL = (payload) => {
    return {
        type: 'CALC_TOTAL',
        payload: payload
    }
}