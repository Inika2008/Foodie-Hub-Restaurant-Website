# 🍽️ Food Order App

A modern and responsive Food Ordering Application built with React. Users can browse a menu of 50+ Indian dishes, view dish details, add items to the cart, and see the total bill before placing an order.

## 🚀 Features

### 🍛 Menu
- 50+ Indian dishes
- Attractive food cards
- Dish image, name, price, and description
- Detailed dish popup on clicking **View**

### 🛒 Cart System
- Add items to cart
- Increase quantity automatically for repeated items
- Remove items from cart
- Real-time cart updates

### 💰 Billing
- Automatic total bill calculation
- Quantity-based pricing
- Order summary section

### 🎨 User Interface
- Responsive layout
- Modern card design
- Clean and organized menu display
- User-friendly ordering experience

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- JSX
- CSS3
- React Hooks (`useState`)

---

## 📂 Project Structure

```text
src/
│
├── App.jsx
├── index.css
├── Header.jsx
├── MenuCard.jsx
├── Cart.jsx
├── MenuList.jsx
├── Category.jsx
└── MenuModal.jsx
```

---

## 📸 Images

This project uses online image URLs for food images.

Example:

```javascript
{
  id: 1,
  name: "Butter Chicken",
  price: 260,
  img: "https://images.unsplash.com/photo-xxxxxxxx",
  desc: "Creamy Punjabi curry"
}
```

Image sources include:

- Unsplash
- Pinterest
- Pixabay

### Benefits of Using URLs

- No need to download and manage image files
- Smaller project size
- Easy image updates
- Faster development

> Note: Internet connection is required for images to load.

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/food-order-app.git
```

### Navigate to Project Folder

```bash
cd food-order-app
```

### Install Dependencies

```bash
npm install
```

### Run the Project

```bash
npm run dev
```

or

```bash
npm start
```

---

## 🎯 How to Use

1. Browse available dishes.
2. Click **View** to see dish details.
3. Click **Add to Cart** to add items.
4. Review selected items in the cart section.
5. Check the total bill amount.
6. Click **Place Order** to complete the order.

---

## ✨ Future Enhancements

- Search dishes
- Category filters
- Veg / Non-Veg toggle
- User login and authentication
- Order history
- Payment gateway integration
- Backend database support
- Admin dashboard
- Order tracking system

---

## 📱 Responsive Design

The application is designed to work on:

- Desktop
- Laptop
- Tablet
- Mobile devices

---



## 👨‍💻 Developer

Built using React.js as a food ordering and menu management application demonstrating component-based architecture, state management, and responsive UI design.
