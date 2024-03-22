import loginReducer from "./features/login";
import storage from "../ulitity/localstorage";
import { persistStore, persistReducer } from "redux-persist";
import { createStore, combineReducers } from "redux";
const persistConfig = {
  key: "root", // key for local storage
  storage: storage, // use custom storage adapter
  whitelist: ["login"], // only 'reducer1' will be persisted
};
const rootReducer = combineReducers({
  login: loginReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
