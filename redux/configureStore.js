import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import Reducer from './reducers/combinedReducer';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist : ['authType']
}

const persistData = persistReducer(persistConfig, Reducer);

export const store = createStore(persistData);
export const persistor = persistStore(store);

