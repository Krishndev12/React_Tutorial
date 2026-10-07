import { createStore } from "redux";

const buyCake = "BUY_CAKE";
const restockCake = "RESTOCK_CAKE";
const buyIcecream = "BUY_ICECREAM";
const restockIceCream = " RESTOCK_ICECREAM";
// export function BUY_ICECREAM(q) {
//   return {
//     type: buyIcecream,
//     payload: q || 1,
//   };
// }

// export function RESTOCK_ICECREAM() {
//   return {
//     type: restockIceCream,
//   };
// }
export function BUY_CAKE(q) {
  return {
    type: buyCake,
    payload: q || 1,
  };
}

export function RESTOCK_CAKE() {
  return {
    type: restockCake,
  };
}

const initialCakeState = {
  numOfCakes: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case buyCake:
      if (action.payload > state.numOfCakes) {
        return state;
      }
      return {
        numOfCakes: state.numOfCakes - action.payload,
      };
    case restockCake:
      return {
        numOfCakes: 20,
      };

    default:
      return state;
  }
};

// const iceCreamReducer = (state = initialCakeState, action) => {
//   switch (action.type) {
//     case buyCake:
//       if (action.payload > state.numOfCakes) {
//         return state;
//       }
//       return {
//         numOfCakes: state.numOfCakes - action.payload,
//       };
//     case restockCake:
//       return {
//         numOfCakes: 20,
//       };

//     default:
//       return state;
//   }
// };

export const Store = createStore(cakeReducer);

// export const rootReducer = {
//   cake: cakeReducer,
//   iceCream: iceCreamReducer,
// };

// Store.subscribe(() => {
//   console.log(Store.getState());
// });

// Store.dispatch(BUY_CAKE());
// Store.dispatch(BUY_CAKE());
// Store.dispatch(BUY_CAKE());
