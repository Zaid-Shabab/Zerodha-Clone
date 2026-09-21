# Zerodha Clone 📈

Hey! This is my **Zerodha Clone** project.

I built this project to practice and understand how a full-stack web application works using React, Node.js, Express and MongoDB.

The project has a frontend, backend and dashboard, and I have also deployed it using Render.

## 🔗 Live Project

**Frontend:**
https://zerodha-clone-frontend-5db5.onrender.com

**Backend:**
https://zerodha-clone-backend-hpkz.onrender.com

## 🛠️ Technologies Used

* React.js
* React Router
* Node.js
* Express.js
* MongoDB
* Mongoose
* Axios
* Bootstrap / CSS
* Render

## 📁 Project Structure

```text
Zerodha-Clone/
│
├── backend/
├── dashboard/
├── frontend/
└── README.md
```

### Frontend

The frontend contains the landing pages like:

* Home
* Signup
* About
* Products
* Pricing
* Support

### Backend

The backend is built using Node.js and Express.

It handles things like:

* Holdings
* Positions
* Orders
* MongoDB connection

### Dashboard

The dashboard part is used for the trading-related UI and components.

## 🔌 Some Backend APIs

### Get Holdings

```text
GET /allHoldings
```

### Get Positions

```text
GET /allPositions
```

### Create Order

```text
POST /newOrder
```

Example:

```json
{
  "name": "TCS",
  "qty": 1,
  "price": 3500,
  "mode": "BUY"
}
```

## ▶️ Running the Project Locally

First clone the repository:

```bash
git clone https://github.com/Zaid-Shabab/Zerodha-Clone.git
cd Zerodha-Clone
```

### Run Backend

```bash
cd backend
npm install
node index.js
```

Backend will run on:

```text
http://localhost:3002
```

### Run Frontend

Open another terminal:

```bash
cd frontend
npm install
npm start
```

Frontend will run on:

```text
http://localhost:3000
```

## 🔐 Environment Variable

For the backend, create a `.env` file:

```env
MONGO_URL=your_mongodb_connection_string
```

Don't upload your `.env` file or database password to GitHub.

## 📌 Note

This is a **practice/educational project** inspired by Zerodha. It is not the official Zerodha website or application.

## 👨‍💻 About Me

I'm building this project to improve my skills in **React, Node.js, Express and MongoDB** and to understand how frontend and backend work together in a real project.

Thanks for checking out my project! 🙂
