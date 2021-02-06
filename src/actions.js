import axios from "axios";
const url = process.env.REACT_APP_MOCK_URL;
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";
export const FETCH_USERS = "FETCH_USERS";
export const LOADING_TRUE = "LOADING_TRUE";
export const LOADING_FALSE = "LOADING_FALSE";

/*action creators*/
export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};

export const fetchUsers = (cart, state) => {
  return { type: FETCH_USERS, payload: { cart: cart, state: state } };
};

/*async fetch from mock api */
export const fetchUsersFunc = (state) => {
  return (dispatch) => {
    if (state === "first") {
      axios(url).then((res) => {
        dispatch(fetchUsers(res.data, state));
        dispatch({ type: LOADING_FALSE });
      });
    } else if (state === "again") {
      dispatch({ type: LOADING_TRUE });
      axios(url).then((res) => {
        dispatch(fetchUsers(res.data, state));
        dispatch({ type: LOADING_FALSE });
      });
    }
  };
};
