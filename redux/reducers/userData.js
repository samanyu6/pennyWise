
export default function(state={status: 'LOGGEDOUT', data:'GUEST'}, action){
    switch(action.type){
        case 'LOGIN':
            return Object.assign({},state,{
                status: 'LOGGEDIN',
                data: action.payload
            });
        case 'SIGNOUT':
            return Object.assign({}, state, {
                status: 'LOGGEDOUT',
                data: 'GUEST'
            });
        default:
            return state;
    }
}