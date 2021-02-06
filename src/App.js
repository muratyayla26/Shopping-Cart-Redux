import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
