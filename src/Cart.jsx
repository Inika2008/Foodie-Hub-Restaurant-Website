export default function Cart({
  cart,
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
  total,
  showCheckout,
  setShowCheckout,
  customerInfo,
  setCustomerInfo,
  paymentMethod,
  setPaymentMethod,
  deliveryTime,
  setDeliveryTime,
  paymentDetails,
  setPaymentDetails,
  handlePlaceOrder,
  orderMessage
}) {
  return (
    <div className="cart">
      <h3>Your Order</h3>

      {cart.length === 0 ? (
        <p className="empty-text">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <strong>{item.name}</strong>
              <div className="cart-item-price">₹{item.price * item.qty}</div>
            </div>

            <div className="qty-controls">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
              <button onClick={() => removeItem(item.id)} className="remove-btn">Remove</button>
            </div>
          </div>
        ))
      )}

      <hr />
      <h3>Total: ₹{total}</h3>

      {cart.length > 0 && (
        <div className="cart-actions">
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
          <button className="order-btn" onClick={() => setShowCheckout(true)}>
            Place Order
          </button>
        </div>
      )}

      {orderMessage && <p className="success-text">{orderMessage}</p>}
    </div>
  );
}