// eslint-disable-next-line
export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //calculate items price
  state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

  // shipping price
  state.shippingPrice = addDecimals(state.itemsPrice > 20000 ? 0 : 500);

  // 18% gst
  state.taxPrice = addDecimals(Number(0.18 * state.itemsPrice).toFixed(2));

  // total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
