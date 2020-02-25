
export default function(state='Sign Up', action){
    switch(action.type){
        case 'LOGIN': 
            return state='Login';
        case 'SIGNUP': 
            return  state='Sign Up';
        default:
            return state;
    }
}