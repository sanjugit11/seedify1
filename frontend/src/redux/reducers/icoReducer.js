import { ICO_TYPES } from "../actions/icoAction";

const initialState = {

};

const icoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ICO_TYPES.CREATE_ICO:
      return action.payload;
    case ICO_TYPES.GET_ICO:
      return action.payload;
  
    default:
      return state;
  }
};

export default icoReducer;
