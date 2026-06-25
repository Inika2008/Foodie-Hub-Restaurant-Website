export default function Category({ setCategory }) {
  const cats = ["All", "Starter", "Main", "Drinks"];

  return (
    <div style={styles.box}>
      {cats.map((c) => (
        <button key={c} onClick={() => setCategory(c)}>
          {c}
        </button>
      ))}
    </div>
  );
}

const styles = {
  box: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    margin: "10px"
  }
};