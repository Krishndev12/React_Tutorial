const { createStore } = require("redux");

const cIncreament = "COUNTER_INCREAMENT";
const cDecreament = "COUNTER_DECREAMENT";
const cReset = "COUNTER_RESET";

// action creater (ye pura bhi action hi hai jo ekk object hai, jisme 2 key hoti hai 1st one type, 2nd one data(ye optional hai.))
function COUNTER_INCREAMENT() {
  return {
    type: cIncreament, // action
  };
}

function COUNTER_DECREAMENT() {
  return {
    type: cDecreament,
  };
}

function COUNTER_RESET() {
  return {
    type: cReset,
  };
}

// initial value of state
const initialCounterState = {
  numOfCounter: 0,
};

// reducer function

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case cIncreament:
      return {
        numOfCounter: state.numOfCounter + 1,
      };
    case cDecreament:
      return {
        numOfCounter: state.numOfCounter - 1,
      };
    case cReset:
      return {
        numOfCounter: 0,
      };
    default:
      return state;
  }
};

const Store = createStore(counterReducer);

Store.subscribe(() => {
  console.log(Store.getState());
});

Store.dispatch(COUNTER_INCREAMENT());
Store.dispatch(COUNTER_INCREAMENT());
Store.dispatch(COUNTER_INCREAMENT());
Store.dispatch(COUNTER_DECREAMENT());
