export default function Cart({ cart, removeFromCart }) {
  return (
    <div style={styles.cart}>
      <h3>🛒 Cart</h3>

      {cart.length === 0 ? (
        <p>No items</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} style={styles.item}>
            <p>{item.name}</p>
            <button onClick={() => removeFromCart(item.id)}>X</button>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  cart: {
    flex: 1,
    padding: "10px",
    background: "#f2f2f2"
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    background: "white",
    margin: "5px",
    padding: "5px"
  }
};