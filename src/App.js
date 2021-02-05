import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items"; //static items
import { createStore } from "redux";
import { DECREASE, INCREASE } from "./actions";

const initialStore = {
  count: 0,
  name: "murat",
};

const reducer = (state, action) => {
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1, name: "yayla" };
  }
  return state;
};

const store = createStore(reducer, initialStore);
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });

console.log(store.getState());
function App() {
  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
