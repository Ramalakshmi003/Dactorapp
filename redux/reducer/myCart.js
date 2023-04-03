import { ActionTypes } from "../action/ActionTypes";
import DoctorsList from "../../src/consts/DoctorsData";


const initialState = {
  cartList: []
}

export function mycartReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.myCartDetails:
      var newRec = [...state.cartList];
      const ind = newRec.findIndex(
        (DoctorsList) => DoctorsList.id === action.payload.id
      );
      if (ind < 0) {
        newRec.push(action.payload);
      } else {
        newRec.splice(ind, 1);
      }
      return { ...state, cartList: newRec };
    default:
      return state;
  }
}