const { createStore, combineReducers } = require("redux");

function numberReducer(incomingObject = { number: 0 }, action) {
  if (action.type === "add") {
    return { number: incomingObject.number + action.payload };
  } else if (action.type === "subtract") {
    return { number: incomingObject.number - action.payload };
  } else if (action.type === "increment") {
    return { number: incomingObject.number + 1 };
  } else if (action.type === "decrement") {
    return { number: incomingObject.number - 1 };
  } else if (action.type === "reset") {
    return { number: 0 };
  } else {
    return incomingObject;
  }
}

function anoterReducer(incomingObject = { anotherNumber: 0 }, action) {
  if (action.type === "add") {
    return { anotherNumber: incomingObject.anotherNumber + action.payload };
  } else if (action.type === "subtract") {
    return { anotherNumber: incomingObject.anotherNumber - action.payload };
  } else if (action.type === "increment") {
    return { anotherNumber: incomingObject.anotherNumber + 1 };
  } else if (action.type === "decrement") {
    return { anotherNumber: incomingObject.anotherNumber - 1 };
  } else if (action.type === "reset") {
    return { anotherNumber: 0 };
  } else {
    return incomingObject;
  }
}

const rootReducer = combineReducers({
  number: numberReducer,
  another: anoterReducer,
});

const initialState = {
  number: { number: 0 },
  another: { anotherNumber: 0 },
};

const store = createStore(rootReducer, initialState);

console.log(store.getState()); // { number: { number: 0 }, another: { anotherNumber: 0 } }

store.dispatch({ type: "add", payload: 10 });
console.log(store.getState()); // { number: { number: 0 }, another: { anotherNumber: 10 } }

store.dispatch({ type: "subtract", payload: 5 });
console.log(store.getState()); // { number: { number: 5 }, another: { anotherNumber: 10 } }
