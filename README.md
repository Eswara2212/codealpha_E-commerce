# 🛍️ ShopX – Simple E-commerce Store

ShopX is a minimalist full-stack e-commerce web app built with **Express.js**, **MongoDB**, and **Vanilla HTML/CSS/JS**.

## 🚀 Features
- 🧾 Dynamic product listings
- 🛒 Shopping cart using localStorage
- 🔐 Dummy login/registration
- 📦 Order submission to backend
- 🧱 REST API with Express & MongoDB

## 🧰 Tech Stack
- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB + Mongoose

## 📦 Installation

```bash
git clone https://github.com/your-username/shopx
cd shopx
npm install
node server.js

## Structure
/client         → HTML, CSS, JS  
/server  
/models       → Mongoose schemas  
/routes       → API routes  
/server.js     → Backend entry

🔗 API Routes
GET /api/products – List products
POST /api/orders – Place an order
POST /api/auth/login – Dummy login
POST /api/auth/register – Dummy signup

🖥️ UI Snapshots
index.html: Lists products with "Add to Cart"
cart.html: Displays cart items + place order button
styles.css: Clean, responsive layout

💡 Future Enhancements

JWT authentication
Admin dashboard
Payment gateway integration
Product filters/search
Image upload
