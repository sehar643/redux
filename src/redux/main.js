import { combineReducers } from "redux";
import { cartReducer } from "./reducer";


let rootReducer = combineReducers({
    cartReducer,
    // authReducer,
    // crud    
})

export default rootReducer;