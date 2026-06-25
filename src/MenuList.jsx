import MenuCard from "./MenuCard";

export default function MenuList({ data, setSelected, addToCart }) {
  return (
    <div style={styles.grid}>
      {data.map((item) => (
        <MenuCard
          key={item.id}
          item={item}
          setSelected={setSelected}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "15px",
    flex: 3,
    padding: "10px"
  }
};