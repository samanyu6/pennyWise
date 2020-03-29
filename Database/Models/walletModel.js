import {Model} from '@nozbe/watermelondb';
import {field,date, children, readonly} from '@nozbe/watermelondb/decorators';

export default class WalletModel extends Model {
    static table = 'wallets';
    static associations = {
        expenses: { type:'has_many', foreignKey:'wallet_name'}
    };

    @field('wallet_name') walletName
    @field('balance') balance
    @field('income') income
    @field('color') color
    @field('currency') currency
    @readonly @date('created_at') createdAt
    @children('expenses') expenses

}