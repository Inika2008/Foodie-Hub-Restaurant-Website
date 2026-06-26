export default function MenuCard({ item, setSelected, addToCart }) {
  return (
    <div className="card">
      <img src={item.img || item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>{item.desc}</p>
      <p className="price-text">₹{item.price}</p>

      <div className="card-actions">
        <button onClick={() => setSelected(item)}>View</button>
        <button onClick={() => addToCart(item)}>Add</button>
      </div>
    </div>
  );
}