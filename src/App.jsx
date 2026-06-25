import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [orderMessage, setOrderMessage] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: ""
  });
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [deliveryTime, setDeliveryTime] = useState("30-40 mins");
  const [paymentDetails, setPaymentDetails] = useState("");

  const menu = [
    { id: 1, name: "Butter Chicken", price: 260, category: "Non-Veg", img: "https://images.unsplash.com/photo-1705174427925-744646e72117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D", desc: "Creamy Punjabi curry" },
    { id: 2, name: "Paneer Butter Masala", price: 220, category: "Veg", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFuZWVyJTIwYnV0dGVyJTIwbWFzYWxhfGVufDB8fDB8fHww", desc: "Soft paneer gravy" },
    { id: 3, name: "Chicken Biryani", price: 240, category: "Rice", img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHx8MHx8fDA%3D", desc: "Hyderabadi style" },
    { id: 4, name: "Veg Biryani", price: 160, category: "Rice", img: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnJTIwYmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D", desc: "Spiced rice" },
    { id: 5, name: "Masala Dosa", price: 90, category: "South", img: "https://images.unsplash.com/photo-1751560455942-f859f1215826?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hc2FsYSUyMGRvc2F8ZW58MHx8MHx8fDA%3D", desc: "Crispy dosa" },
    { id: 6, name: "Idli Sambar", price: 60, category: "South", img: "https://media.istockphoto.com/id/1024549454/photo/idly-sambar-or-idli-with-sambhar-and-green-red-chutney-popular-south-indian-breakfast.webp?a=1&b=1&s=612x612&w=0&k=20&c=JGYk6zJNS6bneptDScV-2P8PrH2EirPA1qH3KKW8_9w=", desc: "Soft idli" },
    { id: 7, name: "Vada", price: 50, category: "South", img: "https://images.unsplash.com/photo-1728508707623-56d3dca51187?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFkYSUyMHNhbWJhcnxlbnwwfHwwfHx8MA%3D%3D", desc: "Crispy snack" },
    { id: 8, name: "Samosa", price: 20, category: "Snack", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftb3NhfGVufDB8fDB8fHww", desc: "Fried snack" },
    { id: 9, name: "Pani Puri", price: 40, category: "Snack", img: "https://images.unsplash.com/photo-1586357507341-3fbe59f2a5d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuaSUyMHB1cml8ZW58MHx8MHx8fDA%3D", desc: "Street food" },
    { id: 10, name: "Pav Bhaji", price: 120, category: "Snack", img: "https://images.unsplash.com/photo-1753357303396-704b5abe8945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGF2JTIwYmhhaml8ZW58MHx8MHx8fDA%3D", desc: "Spicy mash" },
    { id: 11, name: "Chicken Curry", price: 200, category: "Non-Veg", img: "https://images.unsplash.com/photo-1708782344490-9026aaa5eec7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMGN1cnJ5fGVufDB8fDB8fHww", desc: "Spicy curry" },
    { id: 12, name: "Mutton Curry", price: 320, category: "Non-Veg", img: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXV0dG9uJTIwY3Vycnl8ZW58MHx8MHx8fDA%3D", desc: "Tender mutton" },
    { id: 13, name: "Fish Fry", price: 180, category: "Non-Veg", img: "https://images.unsplash.com/photo-1656389863341-1dfd38ee6edc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlzaCUyMGZyeXxlbnwwfHwwfHx8MA%3D%3D", desc: "Crispy fish" },
    { id: 14, name: "Chicken 65", price: 170, category: "Starter", img: "https://images.unsplash.com/photo-1586793783658-261cddf883ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMGZyaWVkfGVufDB8fDB8fHww", desc: "Spicy fried chicken" },
    { id: 15, name: "Paneer Tikka", price: 180, category: "Starter", img: "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D", desc: "Grilled paneer" },
    { id: 16, name: "Veg Fried Rice", price: 120, category: "Rice", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fHww", desc: "Stir fried rice" },
    { id: 17, name: "Chicken Fried Rice", price: 160, category: "Rice", img: "https://plus.unsplash.com/premium_photo-1694141252026-3df1de888a21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbiUyMHJpY2V8ZW58MHx8MHx8fDA%3D", desc: "Chicken rice" },
    { id: 18, name: "Noodles", price: 110, category: "Chinese", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D", desc: "Veg noodles" },
    { id: 19, name: "Spring Roll", price: 90, category: "Chinese", img: "https://plus.unsplash.com/premium_photo-1695756121533-3f60bee7ba7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nJTIwcm9sbHxlbnwwfHwwfHx8MA%3D%3D", desc: "Crispy roll" },
    { id: 20, name: "Momos", price: 100, category: "Snack", img: "https://plus.unsplash.com/premium_photo-1673769108070-580fe90b8de7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9tb3N8ZW58MHx8MHx8fDA%3D", desc: "Steamed dumplings" },
    { id: 21, name: "Chole Bhature", price: 120, category: "North", img: "https://media.istockphoto.com/id/873539518/photo/deep-fried-bread-spicy-chickpeas-curry-and-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=qZP4pFv7bTarFakFrB6nDdjmAtwZzm1RA7ZOGTJlQRA=", desc: "Heavy meal" },
    { id: 22, name: "Rajma Rice", price: 110, category: "North", img: "https://media.istockphoto.com/id/1497380655/photo/rajma-chawal-is-a-popular-north-indian-food-made-of-red-kidney-beans-cooked-with-onions.webp?a=1&b=1&s=612x612&w=0&k=20&c=N-vLQA5Hm1v3VwAxgH8rZ229XCAbNdAGOeTOQ0y2jN0=", desc: "Comfort food" },
    { id: 23, name: "Paratha", price: 60, category: "Breakfast", img: "https://images.unsplash.com/photo-1683533743190-89c9b19f9ea6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyYXRoYXxlbnwwfHwwfHx8MA%3D%3D", desc: "Stuffed bread" },
    { id: 24, name: "Poha", price: 50, category: "Breakfast", img: "https://media.istockphoto.com/id/1093261264/photo/aloo-kanda-poha-or-tarri-pohe-with-spicy-chana-masala-curry-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=cGs-JADB3TeV2If6yx7YNp7OoAFkcrQHlZkVKInTBPc=", desc: "Light breakfast" },
    { id: 25, name: "Upma", price: 40, category: "Breakfast", img: "https://media.istockphoto.com/id/2233500923/photo/south-indian-upma-with-traditional-tempering-semolina-breakfast-dish-styled-with-cashews.webp?a=1&b=1&s=612x612&w=0&k=20&c=gVsAx432B2xUKN7TjrXllZwT_8urcQKDU2HZGj1-wDA=", desc: "Semolina dish" },
    { id: 26, name: "Gulab Jamun", price: 70, category: "Dessert", img: "https://media.istockphoto.com/id/163064596/photo/gulab-jamun.webp?a=1&b=1&s=612x612&w=0&k=20&c=F_5_AgCdrsecO13W-wiuCZAwYZPBpN3UETTyYtQQlLM=", desc: "Sweet balls" },
    { id: 27, name: "Rasgulla", price: 80, category: "Dessert", img: "https://media.istockphoto.com/id/1044080542/photo/indian-rasgulla-or-rosogulla-dessert-sweet-served-in-a-bowl-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=DIQag-19lJnJ1PX5T2ppu2fc3hH0Pg83j2-9A-YPeSo=", desc: "Spongy sweets" },
    { id: 28, name: "Jalebi", price: 60, category: "Dessert", img: "https://media.istockphoto.com/id/1406503800/photo/special-indian-sweet-jalebi-or-jilabi-jeelebi-and-jilapi-served-in-dish-isolated-on-dark.webp?a=1&b=1&s=612x612&w=0&k=20&c=TmxMa9IHNmXOoPswtGNh1zIZL6VEZ26iXFp8tZEITEE=", desc: "Crispy sweet" },
    { id: 29, name: "Kheer", price: 90, category: "Dessert", img: "https://media.istockphoto.com/id/1480827583/photo/rice-pudding-served-in-clay-bowl-indian-rice-kheer-with-nuts-on-a-wooden-background-popular.webp?a=1&b=1&s=612x612&w=0&k=20&c=bfzo9QG6cVivIOLBI10Cyxi-MfGTq0E8tQbpEZvglLM=", desc: "Rice pudding" },
    { id: 30, name: "Halwa", price: 100, category: "Dessert", img: "https://media.istockphoto.com/id/1352483057/photo/moong-dal-halwa.webp?a=1&b=1&s=612x612&w=0&k=20&c=0FiX6JDlRUf9ZCS1DmsIGCsiL4ryllAT9Dx9y_dNCQU=", desc: "Sweet dish" },
    { id: 31, name: "Lassi", price: 60, category: "Drinks", img: "https://media.istockphoto.com/id/1468630425/photo/glass-cup-of-turkish-traditional-drink-ayran-kefir-or-buttermilk-made-from-yogurt-healthy-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=zCP66ZJYVdU3XBto5rdPu4q-bPfmJtOf1iJASHe14BI=", desc: "Yogurt drink" },
    { id: 32, name: "Masala Chai", price: 20, category: "Drinks", img: "https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsayUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D", desc: "Indian tea" },
    { id: 33, name: "Cold Coffee", price: 90, category: "Drinks", img: "https://images.unsplash.com/photo-1642647391072-6a2416f048e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbGQlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D", desc: "Chilled coffee" },
    { id: 34, name: "Buttermilk", price: 40, category: "Drinks", img: "https://images.unsplash.com/photo-1630409346699-79481a79db52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVybWlsa3xlbnwwfHwwfHx8MA%3D%3D", desc: "Cooling drink" },
    { id: 35, name: "Fruit Juice", price: 80, category: "Drinks", img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXQlMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D", desc: "Fresh juice" },
    { id: 36, name: "Veg Burger", price: 120, category: "Fast Food", img: "https://media.istockphoto.com/id/2228756719/photo/delicious-hamburger-on-wooden-table-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=LXlrBMLyEWf9LVqJ6SX6_Twl4QCCnb3wjdmc8NWfBP0=", desc: "Crispy burger" },
    { id: 37, name: "Chicken Burger", price: 180, category: "Fast Food", img: "https://media.istockphoto.com/id/1258522678/photo/american-big-chicken-burger.webp?a=1&b=1&s=612x612&w=0&k=20&c=CnQCn4HCktGuZBXxiUnqeesuW94Z741jQrMjNMXL8ss=", desc: "Juicy burger" },
    { id: 38, name: "Pizza", price: 250, category: "Fast Food", img: "https://media.istockphoto.com/id/2256405721/photo/tasty-pizza-with-dry-smoked-sausages-olives-pepper-and-parsley-on-black-table-top-view-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=9PYrF2ol99p-jb6lirN5M46QbFs5X0uuPpMqiD53W7Q=", desc: "Cheesy pizza" },
    { id: 39, name: "French Fries", price: 90, category: "Fast Food", img: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D", desc: "Crispy fries" },
    { id: 40, name: "Sandwich", price: 80, category: "Fast Food", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FuZHdpY2h8ZW58MHx8MHx8fDA%3D", desc: "Toasted sandwich" },
    { id: 41, name: "Ice Cream", price: 120, category: "Dessert", img: "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D", desc: "Cold dessert" },
    { id: 42, name: "Chocolate Cake", price: 150, category: "Dessert", img: "https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNha2V8ZW58MHx8MHx8fDA%3D", desc: "Rich cake" },
    { id: 43, name: "Falooda", price: 110, category: "Dessert", img: "https://media.istockphoto.com/id/2242467885/photo/rose-milk-drink.webp?a=1&b=1&s=612x612&w=0&k=20&c=VA7ZB9jxDkczKA5eOxoMkNDNh1S1htOdVJBY8QXqnnw=", desc: "Layered dessert" },
    { id: 44, name: "Chicken Tikka", price: 200, category: "Starter", img: "https://media.istockphoto.com/id/2043767125/photo/lemon-being-squeezed-over-shrimp-tandoori.webp?a=1&b=1&s=612x612&w=0&k=20&c=PY22LRPcA6rgfLXIA_2m7PoI_aYtHOB-FyM5DIXEtJQ=", desc: "Grilled chicken" },
    { id: 45, name: "Veg Salad", price: 80, category: "Healthy", img: "https://media.istockphoto.com/id/1200812166/photo/vegetarian-masala-mix-veg-with-indian-cottage-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=9v3I3RWUAU1N3Od_-LcXoN002yCNYo3VEL5JVTxPKL4=", desc: "Fresh salad" },
    { id: 46, name: "Fruit Bowl", price: 100, category: "Healthy", img: "https://media.istockphoto.com/id/533350016/photo/fruit-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=ESZjyQtyn7TX3qXAbT0Ew5qDx6oloHh5vtYE7LTZ_PM=", desc: "Fresh fruits" },
    { id: 47, name: "Veg Manchurian", price: 140, category: "Chinese", img: "https://media.istockphoto.com/id/1208083887/photo/freshly-prepared-veg-manchurian-with-a-bowl-of-fried-rice.webp?a=1&b=1&s=612x612&w=0&k=20&c=mj3v5ytEb7K8w43e3wz8yBv4ae1UTvS7_ETO4girtV0=", desc: "Indo Chinese" },
    { id: 48, name: "Chicken Manchurian", price: 180, category: "Chinese", img: "https://media.istockphoto.com/id/1072951288/photo/indian-chilli-chicken-dry-served-in-a-plate-over-moody-background-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=GeqSiSUYGqzSTTUVI3b4iLTgkuD2jDLeVwzm0PvkTt0=", desc: "Spicy chicken balls" },
    { id: 49, name: "Chaat", price: 70, category: "Snack", img: "https://media.istockphoto.com/id/1198449763/photo/aloo-chaat-or-alu-chat-is-a-popular-street-food-originating-from-the-indian-subcontinent.webp?a=1&b=1&s=612x612&w=0&k=20&c=O1s8AklUHpt8l7mMxtVPdsoS36l6z3qoUKizNguMTr4=", desc: "Tangy snack" },
    { id: 50, name: "Kulfi", price: 50, category: "Dessert", img: "https://media.istockphoto.com/id/657073780/photo/rajwari-or-rajwadi-sweet-kesar-badam-pista-kulfi-or-ice-cream-candy.webp?a=1&b=1&s=612x612&w=0&k=20&c=D4gZyAdK340jjnX8KGhXaflZISqBkmdd9Od0wTmQi1U=", desc: "Indian ice cream" }
  ];

  const categories = ["All", ...Array.from(new Set(menu.map((item) => item.category)))];
  const filteredMenu = activeCategory === "All" ? menu : menu.filter((item) => item.category === activeCategory);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);

      if (existing) {
        return prev.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
      }

      return [...prev, { ...item, qty: 1 }];
    });
    setOrderMessage("");
  };

  const increaseQty = (id) => {
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.flatMap((item) => {
        if (item.id !== id) return [item];
        return item.qty > 1 ? [{ ...item, qty: item.qty - 1 }] : [];
      })
    );
  };

  const removeItem = (id) => setCart((prev) => prev.filter((c) => c.id !== id));

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      setOrderMessage("Please add something to your cart first.");
      return;
    }

    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      setOrderMessage("Please fill in your name, phone, and address.");
      return;
    }

    if ((paymentMethod === "UPI" || paymentMethod === "Card") && !paymentDetails) {
      setOrderMessage(`Please enter your ${paymentMethod === "UPI" ? "UPI ID" : "card details"}.`);
      return;
    }

    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    setOrderMessage(`Thank you ${customerInfo.name}! Your order for ${count} item${count > 1 ? "s" : ""} is confirmed via ${paymentMethod}. Estimated delivery: ${deliveryTime}.`);
    setCart([]);
    setCustomerInfo({ name: "", phone: "", address: "" });
    setPaymentMethod("Cash on Delivery");
    setDeliveryTime("30-40 mins");
    setPaymentDetails("");
    setShowCheckout(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <span>🍽️ Foodie Hub</span>
        <span>🛒 {cart.length}</span>
      </div>

      <div style={styles.categoryRow}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            style={{
              ...styles.categoryBtn,
              ...(activeCategory === category ? styles.activeCategoryBtn : {})
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={styles.container}>
        <div style={styles.menu}>
          {filteredMenu.map((item) => (
            <div key={item.id} style={styles.card}>
              <img src={item.img} alt={item.name} style={styles.img} />
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <p style={styles.price}>₹{item.price}</p>

              <div style={styles.btnRow}>
                <button onClick={() => setSelected(item)}>View</button>
                <button onClick={() => addToCart(item)}>Add</button>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.cart}>
          <h3>Your Order</h3>

          {cart.length === 0 ? (
            <p style={styles.empty}>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <div>
                  <strong>{item.name}</strong>
                  <div style={styles.smallText}>₹{item.price * item.qty}</div>
                </div>

                <div style={styles.qtyControls}>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                  <button onClick={() => removeItem(item.id)} style={styles.removeBtn}>Remove</button>
                </div>
              </div>
            ))
          )}

          <hr />
          <h3>Total: ₹{total}</h3>

          {cart.length > 0 && (
            <button style={styles.orderBtn} onClick={() => setShowCheckout(true)}>
              Place Order
            </button>
          )}

          {showCheckout && cart.length > 0 && (
            <div style={styles.overlay} onClick={() => setShowCheckout(false)}>
              <div style={styles.checkoutModal} onClick={(e) => e.stopPropagation()}>
                <h3>Checkout</h3>
                <p style={styles.modalText}>Please confirm your details before placing the order.</p>

                <form style={styles.checkoutForm} onSubmit={handlePlaceOrder}>
                  <label style={styles.label}>Full Name</label>
                  <input
                    style={styles.input}
                    placeholder="Enter your name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  />

                  <label style={styles.label}>Phone Number</label>
                  <input
                    style={styles.input}
                    placeholder="Enter phone number"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  />

                  <label style={styles.label}>Delivery Address</label>
                  <textarea
                    style={styles.textarea}
                    placeholder="Enter delivery address"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                  />

                  <label style={styles.label}>Delivery Time</label>
                  <select
                    style={styles.select}
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                  >
                    <option value="20-30 mins">20-30 mins</option>
                    <option value="30-40 mins">30-40 mins</option>
                    <option value="45-60 mins">45-60 mins</option>
                  </select>

                  <label style={styles.label}>Payment Method</label>
                  <div style={styles.paymentOptions}>
                    {['Cash on Delivery', 'UPI', 'Card'].map((method) => (
                      <label key={method} style={styles.paymentOption}>
                        <input
                          type="radio"
                          name="payment"
                          value={method}
                          checked={paymentMethod === method}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        {method}
                      </label>
                    ))}
                  </div>

                  {(paymentMethod === "UPI" || paymentMethod === "Card") && (
                    <>
                      <label style={styles.label}>{paymentMethod === "UPI" ? "UPI ID" : "Card Details"}</label>
                      <input
                        style={styles.input}
                        placeholder={paymentMethod === "UPI" ? "Enter your UPI ID" : "Enter card details"}
                        value={paymentDetails}
                        onChange={(e) => setPaymentDetails(e.target.value)}
                      />
                    </>
                  )}

                  <div style={styles.checkoutActions}>
                    <button type="button" style={styles.cancelBtn} onClick={() => setShowCheckout(false)}>
                      Cancel
                    </button>
                    <button type="submit" style={styles.submitBtn}>
                      Confirm Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {orderMessage && <p style={styles.success}>{orderMessage}</p>}
        </div>
      </div>

      {selected && (
        <div style={styles.overlay} onClick={() => setSelected(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <img src={selected.img} alt={selected.name} style={styles.modalImg} />
            <h2>{selected.name}</h2>
            <p>{selected.desc}</p>
            <h3>₹{selected.price}</h3>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: { fontFamily: "Arial", background: "#f5f5f5", minHeight: "100vh" },
  header: {
    background: "#111",
    color: "white",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  categoryRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    padding: "10px"
  },
  categoryBtn: {
    border: "1px solid #ccc",
    padding: "6px 10px",
    borderRadius: "20px",
    background: "white",
    cursor: "pointer"
  },
  activeCategoryBtn: {
    background: "#111",
    color: "white",
    borderColor: "#111"
  },
  container: {
    display: "flex",
    gap: "10px",
    padding: "10px"
  },
  menu: {
    flex: 3,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "10px"
  },
  card: {
    background: "white",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center"
  },
  img: {
    width: "100%",
    height: "110px",
    objectFit: "cover",
    borderRadius: "8px"
  },
  price: {
    fontWeight: "bold",
    color: "#d62828"
  },
  btnRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "6px"
  },
  cart: {
    flex: 1,
    background: "white",
    padding: "10px",
    borderRadius: "10px",
    minHeight: "300px"
  },
  empty: {
    color: "#666"
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
    marginBottom: "8px"
  },
  smallText: {
    color: "#666",
    marginTop: "2px"
  },
  qtyControls: {
    display: "flex",
    alignItems: "center",
    gap: "4px"
  },
  removeBtn: {
    background: "#f8d7da",
    color: "#842029"
  },
  orderBtn: {
    width: "100%",
    background: "green",
    color: "white",
    padding: "8px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  checkoutForm: {
    marginTop: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  },
  checkoutModal: {
    background: "white",
    borderRadius: "12px",
    padding: "18px",
    width: "340px",
    maxWidth: "90vw",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
  },
  modalText: {
    color: "#666",
    margin: "4px 0 10px",
    fontSize: "13px"
  },
  input: {
    padding: "8px 10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    width: "100%",
    boxSizing: "border-box"
  },
  textarea: {
    padding: "8px 10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    minHeight: "70px",
    width: "100%",
    boxSizing: "border-box",
    resize: "vertical"
  },
  label: {
    fontSize: "13px",
    fontWeight: "bold",
    marginTop: "2px"
  },
  select: {
    padding: "8px 10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    width: "100%"
  },
  paymentOptions: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: "6px"
  },
  paymentOption: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px"
  },
  checkoutActions: {
    display: "flex",
    gap: "8px",
    marginTop: "6px"
  },
  cancelBtn: {
    flex: 1,
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    background: "white"
  },
  submitBtn: {
    flex: 1,
    padding: "8px",
    border: "none",
    borderRadius: "6px",
    background: "#d62828",
    color: "white"
  },
  success: {
    marginTop: "10px",
    color: "green",
    fontWeight: "bold"
  },
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
    padding: "15px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center"
  },
  modalImg: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px"
  }
};