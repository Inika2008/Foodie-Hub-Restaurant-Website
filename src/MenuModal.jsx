export default function MenuModal({ item, close }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <img src={item.image} alt="" style={{ width: "100%" }} />

        <h2>{item.name}</h2>
        <p>{item.desc}</p>
        <p><b>Details:</b> {item.details}</p>

        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    background: "white",
    padding: "20px",
    width: "300px",
    borderRadius: "10px"
  }
};