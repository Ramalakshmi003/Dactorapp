import { combineReducers } from "redux";
import { bookingReducers } from "./bookingReducer";
import { mycartReducer } from './myCart';

export default combineReducers({
    bookingReducers, mycartReducer
})
