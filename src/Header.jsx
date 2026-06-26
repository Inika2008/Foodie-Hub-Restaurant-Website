export default function Header({ cartCount }) {
  return (
    <div className="header">
      <span>🍽️ Foodie Hub</span>
      <span>🛒 {cartCount}</span>
    </div>
  );
}