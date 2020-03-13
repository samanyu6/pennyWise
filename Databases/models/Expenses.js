import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators'

export default class Expenses extends Model{
    static table = 'expenses'
    static associations = {
        wallets:{
            type: 'belongs_to',
            key: 'wallet_id'
        }
    }

    @field('wallet_id') wallet_id
    @readonly @date('created_at') createdAt
    @field('expense') expense
    @field('title') title
    @field('description') description
}