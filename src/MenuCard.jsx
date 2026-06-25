export default function MenuCard({ item, setSelected, addToCart }) {
  return (
    <div style={styles.card}>
      <img src={item.image} alt={item.name} style={styles.img} />

      <h3>{item.name}</h3>
      <p>₹{item.price}</p>

      <div style={styles.btnRow}>
        <button onClick={() => setSelected(item)}>View</button>
        <button onClick={() => addToCart(item)}>Add</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 0 10px #ccc"
  },
  img: {
    width: "100%",
    height: "120px",
    objectFit: "cover"
  },
  btnRow: {
    display: "flex",
    justifyContent: "space-between"
  }
};