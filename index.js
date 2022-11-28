const redux = require("redux");
// import { legacy_createStore as createStore } from 'redux';

const createStore = redux.legacy_createStore;

const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Action from Redux",
  };
}

// (previous state, action) => newState

const initialState = {
  numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial State", store.getState());
