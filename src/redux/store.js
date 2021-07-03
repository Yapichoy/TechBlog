import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import quotesReducer from "./reducers/quotesReducer";
import formReducer from "./reducers/formReducer";

let reducers = combineReducers({
    quotes: quotesReducer,
    form: formReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;