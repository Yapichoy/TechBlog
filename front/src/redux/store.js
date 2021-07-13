import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import postsReducer from "./reducers/postsReducer";
import postReducer from "./reducers/postReducer";
import headerReducer from "./reducers/headerReducer";

let reducers = combineReducers({
    posts: postsReducer,
    post: postReducer,
    header: headerReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;