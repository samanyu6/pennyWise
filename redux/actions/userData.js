
export const LOGIN = (payload)=>{
    return {
        type: 'LOGIN',
        payload: payload
    }
}

export const SIGNOUT = ()=>{
    return {
        type: 'SIGNOUT'
    }
}