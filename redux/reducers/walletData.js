import moment from 'moment';

let state = [ ]

export default function (state=state, action){

    let month = moment('LLL');
    console.log(month)

    switch(action.type){

        case 'CREATE_WALLET':
            state = [...state, {
                total: action.payload.total,
                name: action.payload.name,
                expenses: []
            }];
            return state;

        case 'ADD_EXPENSE':


    }
}