import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import AuthReducer from "./reducers/auth"
import AppReducer from "./reducers/app"
import LevelReducer from "./reducers/level"

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let rootReducer = combineReducers({ AuthReducer, AppReducer, LevelReducer })

export type AppStateType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store