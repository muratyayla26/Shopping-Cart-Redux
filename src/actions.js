import axios from "axios";
const url = process.env.REACT_APP_MOCK_URL;
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";
export const FETCH_USERS = "FETCH_USERS";

/*action creators*/
export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};

export const fetchUsers = (cart) => {
  return { type: FETCH_USERS, payload: { cart: cart } };
};

/*async fetch from mock api */
export const fetchUsersFunc = () => {
  return (dispatch) => {
    axios(url).then((res) => dispatch(fetchUsers(res.data)));
  };
};
