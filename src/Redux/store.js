import { createStore,combineReducers,applyMiddleware } from "redux";
import postReducer from "./Reducers/postReducer";
import thunk from "redux-thunk";
import historyReducer from "./Reducers/historyReducer";

const rootReducer = combineReducers({
    post: postReducer,
    history : historyReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;