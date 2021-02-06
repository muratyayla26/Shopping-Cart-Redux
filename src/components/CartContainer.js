import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTALS, fetchUsersFunc } from "../actions";

const CartContainer = ({
  cart = [],
  total,
  getTotals,
  clearCart,
  fetchUsers,
}) => {
  useEffect(() => {
    getTotals();
  }, [cart]);
  useEffect(() => {
    fetchUsers();
  }, []);

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>₺{total}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            clearCart();
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart, total: state.total };
};

const mapDispatchToProPS = (dispatch) => {
  return {
    clearCart: () => dispatch({ type: CLEAR_CART }),
    getTotals: () => dispatch({ type: GET_TOTALS }),
    fetchUsers: () => dispatch(fetchUsersFunc()),
  };
};

export default connect(mapStateToProps, mapDispatchToProPS)(CartContainer);
