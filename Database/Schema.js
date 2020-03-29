import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const mySchema = appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'wallets',
            columns:[
                { name:'wallet_name', type:'string' },
                { name:'balance', type:'number' },
                { name:'income' , type: 'number', isOptional: true },
                { name:'color', type:'string' },
                { name:'currency',type:'string' },
                // { name:'' },
                { name: 'created_at', type: 'number' },
            ]
        }),

        tableSchema({
            name: 'expenses',
            columns: [
                { name:'wallet_name', type:'string' },
                { name:'name', type:'string' },
                { name:'description', type:'string' },
                { name:'amount', type:'number' },
                // { name:'currency', type:'string' },
                { name:'created_at', type:'number'}
            ]
        })
    ]
})