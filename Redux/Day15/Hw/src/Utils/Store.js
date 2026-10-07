import { createStore, combineReducers } from "redux";

const ADD_ITEM = "ADD_ITEM";
const INCREAMENT = "INCREAMENT";
const DECREAMNET = "DECREAMNET";
const RESET = "RESET";

export const increament = () => {
  return {
    type: INCREAMENT,
  };
};
export const decreament = () => {
  return {
    type: DECREAMNET,
  };
};
export const reset = () => {
  return {
    type: RESET,
  };
};

export const addItem = (d) => {
  return {
    type: ADD_ITEM,
    payload: d,
  };
};

const initialListState = {
  data: [],
};

const initialCounterState = {
  initialCount: 0,
};

const listReducer = (state = initialListState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREAMENT:
      return {
        initialCount: state.initialCount + 1,
      };
    case DECREAMNET:
      return {
        initialCount: state.initialCount - 1,
      };
    case RESET:
      return {
        initialCount: 0,
      };

    default:
      return state;
  }
};
// export const Store = createStore(listReducer);

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: listReducer,
});

export const Store = createStore(rootReducer);
