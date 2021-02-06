import {
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
  FETCH_USERS,
  LOADING_FALSE,
  LOADING_TRUE,
} from "./actions";

const initialStore = {
  cart: [],
  total: 0,
  amount: 0,
  loading: true,
};

const reducer = (state = initialStore, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cart) => {
        return cart.id !== action.payload.id;
      }),
    };
  }
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartAcc, cartItem) => {
        const { amount, price } = cartItem;
        const itemPriceTotal = amount * price;

        cartAcc.amount += amount;
        cartAcc.total += itemPriceTotal;
        return cartAcc;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((item) => {
        if (action.payload.id === item.id) {
          if (action.payload.toggle === "inc") {
            return { ...item, amount: item.amount + 1 };
          }
          if (action.payload.toggle === "dec") {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      }),
    };
  }

  if (action.type === FETCH_USERS) {
    return { ...state, cart: action.payload.cart };
  }
  if (action.type === LOADING_FALSE) {
    return { ...state, loading: false };
  }
  if (action.type === LOADING_TRUE) {
    return { ...state, loading: true };
  }
  return state;
};

export default reducer;
