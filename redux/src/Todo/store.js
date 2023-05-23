import { createStore,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./reducer";

const devTool = composeWithDevTools();

const store = createStore(
    combineReducers({
        todo : reducer
     } ),
    devTool
);
export default store;