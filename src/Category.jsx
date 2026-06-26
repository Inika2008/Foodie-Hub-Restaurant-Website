export default function Category({ categories, activeCategory, setCategory }) {
  return (
    <div className="category-box">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setCategory(category)}
          className={activeCategory === category ? "active-category" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}