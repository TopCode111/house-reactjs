import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from '../reducers';
import storage from 'redux-persist/lib/storage';

const persisConfig = {
    key: 'root',
    storage: storage
};

const pReducer = persistReducer(persisConfig, rootReducer);
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(pReducer, composedEnhancer);
const persistor = persistStore(store);

store.subscribe(() => {

})

export { persistor, store };