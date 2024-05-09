import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import userReducer from "./User.reducer"
import { thunk } from "redux-thunk"
// import { noteReducer } from "./Notes/note.reducer"

let rootReducer = combineReducers({
    userReducer: userReducer,
    // noteReducer: noteReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))