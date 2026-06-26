import MenuCard from "./MenuCard";

export default function MenuList({ data, setSelected, addToCart }) {
  return (
    <div className="menu-grid">
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