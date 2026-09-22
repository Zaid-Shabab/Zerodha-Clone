# Zerodha Clone

A full-stack trading platform clone inspired by Zerodha, built with React, Node.js, Express, MongoDB, and Mongoose.

This project was built to understand how a full-stack application works across a frontend, backend, and dashboard, including handling trading-related data such as holdings, positions, and orders.

## Live Demo

### Frontend

https://zerodha-clone-frontend-5db5.onrender.com

## Features

- Zerodha-inspired landing pages
- User signup flow
- Trading dashboard
- Holdings management
- Positions management
- Order creation
- MongoDB database integration
- REST API integration between frontend and backend
- Responsive UI

## Tech Stack

### Frontend

- React
- React Router
- Axios
- Bootstrap
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Deployment

- Render

## Project Structure

```text
Zerodha-Clone/
├── backend/
├── dashboard/
├── frontend/
└── README.md
```

## How It Works

The project is divided into three main parts: frontend, backend, and dashboard.

The frontend contains the public-facing pages such as Home, About, Products, Pricing, Support, and Signup.

The backend is built with Node.js and Express and provides APIs for managing trading-related data such as holdings, positions, and orders.

The dashboard provides the interface for viewing and interacting with trading-related data.

MongoDB is used to store application data, with Mongoose handling database interaction from the backend.

## Backend APIs

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

Example request:

```json
{
  "name": "TCS",
  "qty": 1,
  "price": 3500,
  "mode": "BUY"
}
```

## Running Locally

### Clone the Repository

```bash
git clone https://github.com/Zaid-Shabab/Zerodha-Clone.git
cd Zerodha-Clone
```

### Backend

```bash
cd backend
npm install
node index.js
```

Backend runs on:

```text
http://localhost:3002
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

## Environment Variables

Create a `.env` file in the backend directory:

```env
MONGO_URL=your_mongodb_connection_string
```

Do not commit your `.env` file or database credentials to GitHub.

## Screenshots

### Home Page

![Zerodha Clone Home Page](./Screenshot%202026-09-22%20171747.png)

### Pricing Page

![Zerodha Clone Pricing Page](./Screenshot%202026-09-22%20171846.png)


## Note

This is a practice and educational project inspired by Zerodha. It is not affiliated with or an official product of Zerodha.

## Author

**Zaid Shabab**

GitHub: https://github.com/Zaid-Shabab
