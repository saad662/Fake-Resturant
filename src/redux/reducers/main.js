import { combineReducers } from "redux";
import {cartReducer} from './reducer'

// rootred = rootreducer
const rootred = combineReducers({
    cartReducer
});
export default rootred