import {Model} from '@nozbe/watermelondb';
import {field,date, readonly} from '@nozbe/watermelondb/decorators';

export default class ExpenseModel extends Model{
    static table = 'expenses';
    static associations = {
        wallets: { type:'belongs_to', key:'wallet_name' }
    };

    @field('wallet_name') walletName
    @field('name') name
    @field('description') description
    @field('amount') amount
    @readonly @date('created_at') createdAt
}