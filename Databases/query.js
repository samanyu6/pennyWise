import {database} from './index';
import moment from 'moment';

export const addWallet = (body) => {
    await database.action(async ()=>{
        return database.collections.get('wallets').create((wallets)=>{
            wallets.name = body.name,
            wallets.balance = body.balance,
            wallets.data = moment().format(),
            wallets.income = body.income,
            wallets.incomeAvail = body.incomeAvail,
            wallets.wallet_id = body.wallet_id
        })
    })
}