import { Model } from '@nozbe/watermelondb';

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
    @readonly @date('created_at') createdAt
    @field('income') income
    @field('incomeAvail') incomeAvail
    @field('wallet_id') wallet_id
}