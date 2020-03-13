import { Model } from '@nozbe/watermelondb';
import {field, action} from '@nozbe/watermelondb/decorators';

export default class Wallets extends Model{
    static table = 'wallets'
    static associations = {
        expenses:{
            type: 'has_many',
            foreignKey: 'wallet_id'
        }
    }

    @field('name') name
    @field('balance') balance
    // @readonly @date('created_at') createdAt
    @field('date') date
    @field('income') income
    @field('incomeAvail') incomeAvail
    @field('wallet_id') wallet_id
    
}

