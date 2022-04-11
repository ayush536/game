import { createStore, combineReducers } from "redux";
import { loginReducer } from "./Login/reducer";
import { productReducer } from "./Products/reducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    products: productReducer
});

export const store = createStore(rootReducer);