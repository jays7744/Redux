import { createStore, combineReducers } from "redux";
import { Reducer } from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools();

const Store = createStore(
    combineReducers({
        counter : Reducer
    }),
    composedEnhancer
)
export default Store;