const { createStore, combineReducers } = require("redux");

const buycake = "BUY_CAKE";
const restockcake = "RESTOCK_CAKE";
const buyIceCream = "BUY_ICECREAM";
const restockIceCream = "RESTOCK_ICECREAM";

// ye charo action creater hai.
// action creater (ye pura bhi action hi hai jo ekk object hai, jisme 2 key hoti hai 1st one type, 2nd one data(ye optional hai.))
function BUY_ICECREAM() {
  return {
    type: buyIceCream,
  };
}
function RESTOCK_ICECREAM() {
  return {
    type: restockIceCream,
  };
}

function BUY_CAKE(q) {
  return {
    // ye jo return kar rahe hai object ye hai action. kyuki yahi baat to buyer ke mann me hai jo reducer function bo bolega ki ye do mujhe itna do.
    type: buycake,
    data: q || 1, // ye quantity hai jaise kitna cake bolega buyer agar kuchh nahi bolta hai quantity ke baare me to 1 dena hai. that's it.
  };
}

function RESTOCK_CAKE() {
  return {
    type: restockcake,
  };
}

const initialCakeState = {
  numOfCakes: 12,
};

const initialIcecreamState = {
  numOfIcecreams: 50,
};

// ye hai reducer function. jo state manage karta hai.
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case buycake: {
      if (state.numOfCakes < action.data || state.numOfCakes == 0) return state;
      return {
        numOfCakes: state.numOfCakes - action.data,
      };
    }

    case restockcake: {
      return {
        numOfCakes: 12,
      };
    }
    default: {
      return state;
    }
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case buyIceCream: {
      return {
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    }
    case restockIceCream: {
      return {
        numOfIcecreams: 50,
      };
    }

    default: {
      return state;
    }
  }
};

// yaha createSTore me apna reducer function pass karte hai. ki iss reducer function ke according state change karo.
// const Store = createStore(cakeReducer);//

// jab multiple reducer function hota hai tab aise hi pass karte hai. key dete hai ekk and value me reducer function ka name.
const rootReducer = combineReducers({
  cakes: cakeReducer,
  icecream: icecreamReducer,
});

// feer yaha vo variable yani rootReducer ko createStore me pass kar dete hai.
const Store = createStore(rootReducer);

// Store.dispatch(BUY_CAKE());
// Store.dispatch(BUY_CAKE());
// // Store.dispatch(BUY_CAKE());
// console.log(Store.getState());

// Store.dispatch(RESTOCK_CAKE());
// console.log(Store.getState());

// jab bhi Store.dispatch ka line chalta hai tab ye subscribe ka callback chalta hai. and updated state jo return hua hai wo hame milta hai.
Store.subscribe(() => {
  console.log(Store.getState());
});

// jo user ke mann me baat tha usko reducer function tak behja yani bola wahi hai dispatch karna.
Store.dispatch(BUY_CAKE());
Store.dispatch(BUY_CAKE());
Store.dispatch(RESTOCK_CAKE());

Store.dispatch(BUY_ICECREAM());
Store.dispatch(BUY_CAKE(5));
