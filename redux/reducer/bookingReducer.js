import { ActionTypes } from "../action/ActionTypes";


const initialState ={
    bookingDetails:{ bookingNo: "1234"}
};


export function bookingReducers(state = initialState,action) {
    switch (action.types){
        case ActionTypes.bookingDetails:
            return{...state,bookingDetails:action.payload};
            default:
                return state;
    }
}