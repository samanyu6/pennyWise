//Database
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import {Schema} from './Schema';
import Wallets from './models/Wallets';
import Expenses from './models/Expenses';

//Database setup
const adapter = new SQLiteAdapter({
    database: 'UserData',
    schema: Schema
  });
  
export const database = new Database({
    adapter,
    modelClasses: [Wallets, Expenses],
    actionsEnabled: true
})
  