import {appSchema, tableSchema} from '@nozbe/watermelondb';

export const Schema = appSchema({
    version: 1,
    tables:[
        tableSchema({
            name: 'wallets',
            columns: [
                {name: 'name', type: 'string'},
                {name: 'balance', type:'number'},
                {name: 'created_at', type: 'number'},
                {name: 'income', type: 'number', isOptional: true},
                {name: 'incomeAvail', type: 'boolean'},
                {name: 'wallet_id', type: 'string'}
            ]
        }),
        tableSchema({
            name: 'expenses',
            columns:[
                {name: 'wallet_id', type:'string'},
                {name: 'created_at', type: 'number'},
                {name: 'expense', type:'number'},
                {name: 'title', type:'string'},
                {name: 'description', type:'string'}
            ]
        })
    ]
})