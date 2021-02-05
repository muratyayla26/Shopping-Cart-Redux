import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTALS } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    let cartHolder = [];
    if (action.payload.amount === 1) {
      cartHolder = state.cart.filter((cart) => {
        return cart.id !== action.payload.id;
      });
    } else {
      cartHolder = state.cart.map((cart) => {
        if (cart.id === action.payload.id) {
          return { ...cart, amount: cart.amount - 1 };
        }
        return cart;
      });
    }
    return { ...state, cart: cartHolder };
  }
  if (action.type === INCREASE) {
    let cartHolder = state.cart.map((cart) => {
      if (cart.id === action.payload.id) {
        return { ...cart, amount: cart.amount + 1 };
      }
      return cart;
    });
    return { ...state, cart: cartHolder };
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
  return state;
};

export default reducer;
