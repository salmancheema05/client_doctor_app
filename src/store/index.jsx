import loginReducer from "./features/login";
import storage from "../ulitity/localstorage";
import { persistStore, persistReducer } from "redux-persist";
import { createStore, combineReducers } from "redux";
import darkModeReducer from "./features/darkMode";
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["login"],
};
const rootReducer = combineReducers({
  login: loginReducer,
  mode: darkModeReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
