export default function Header({ cart }) {
  return (
    <div style={styles.header}>
      🍽️ Foodie Hub
      <span>🛒 {cart}</span>
    </div>
  );
}

const styles = {
  header: {
    background: "#ff4d4d",
    color: "white",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "20px"
  }
};