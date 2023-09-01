//! redux store
import { combineReducers } from "redux"
import dragonListReducer from "./dragonListReducer"
import titleReducer from "./titleReducer"

export const rootReducer = combineReducers({
    dragonList : dragonListReducer,
    tite : titleReducer,
})