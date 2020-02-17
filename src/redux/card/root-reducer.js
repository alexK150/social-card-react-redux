import {combineReducers} from "redux";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {CardReducer} from './card.reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['social-card']
};

const rootReducer = combineReducers({
    card: CardReducer
});

export default persistReducer(persistConfig, rootReducer)