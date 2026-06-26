function getExtraInfo(item) {
  const categoryInfo = {
    "Non-Veg": "Hearty and rich, ideal for meat lovers who enjoy bold, saucy flavors.",
    Veg: "Soft, creamy, and comforting for a satisfying vegetarian meal.",
    Rice: "A filling staple that pairs beautifully with curries and gravies.",
    South: "A classic South Indian favorite with vibrant seasoning and a distinctive texture.",
    Snack: "Light, crunchy, and perfect for a quick bite between meals.",
    Starter: "A flavorful opener that sets the mood for a delicious meal.",
    Chinese: "A popular Indo-Chinese choice with a savory, spicy kick.",
    North: "Comforting North Indian flavors that feel hearty and homestyle.",
    Breakfast: "A wholesome morning favorite that is light yet filling.",
    Dessert: "A sweet treat that rounds off the meal beautifully.",
    Drinks: "Cool and refreshing, ideal for balancing spicy flavors."
  };

  const fallback = `A popular ${item.category?.toLowerCase() || "dish"} choice with a satisfying mix of flavor and texture.`;
  return `${categoryInfo[item.category] || fallback} ${item.name} is loved for its balance of taste, aroma, and comfort.`;
}

export default function MenuModal({ item, close }) {
  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={item.img || item.image} alt={item.name} />
        <h2>{item.name}</h2>
        <p>{item.desc}</p>
        <p className="modal-info">{getExtraInfo(item)}</p>
        <p className="modal-meta">Category: {item.category}</p>
        <h3>₹{item.price}</h3>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}