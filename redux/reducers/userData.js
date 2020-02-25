var initState = {status: 'LOGGEDOUT', data:'GUEST'}

export default function(state= initState, action){
    switch(action.type){
        case 'LOGIN':
            state= Object.assign({},state,{
                status: 'LOGGEDIN',
                data: action.payload
            });
            return state;
        case 'SIGNOUT':
            state=  Object.assign({}, state, {
                status: 'LOGGEDOUT',
                data: 'GUEST'
            });
            return state;
        default:
            return state;
    }
}