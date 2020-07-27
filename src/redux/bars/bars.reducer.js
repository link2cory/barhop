import { BarsActionTypes } from "./bars.types";

const INITIAL_STATE = {
  isLoading: true,
  errMess: null,
  bars: [],
};

const barsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BarsActionTypes.ADD_BARS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        bars: action.payload,
      };
    case BarsActionTypes.BARS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};

export default barsReducer;
