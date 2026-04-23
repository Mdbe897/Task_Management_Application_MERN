# 🚀 Task Management Application (MERN Stack)

A full-stack Task Management Application built using the **MERN stack (MongoDB, Express.js, React, Node.js)**.
This app allows users to manage their daily tasks efficiently with authentication, filtering, and a clean user interface.

---

## 🌍 Live Demo

🔗 Frontend: https://task-management-application-mern-sepia.vercel.app
🔗 Backend API: taskmanagementapplicationmern-production.up.railway.app
---

## 📌 Features

### 🔐 Authentication

* User registration & login
* Secure password hashing (bcrypt)
* JWT-based authentication
* Protected routes

### 📋 Task Management

* Create tasks
* View tasks
* Update tasks
* Delete tasks

### 🔎 Advanced Features

* Search tasks by title or description
* Filter tasks by status (pending / completed)
* Sort tasks by deadline or creation date

### ⚡ User Experience

* Real-time updates after actions
* Clean and simple UI
* Responsive design

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* Axios
* React Hooks

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JSON Web Tokens (JWT)

### Deployment

* Frontend: Vercel
* Backend: Railway
* Database: MongoDB Atlas

---

## 📁 Project Structure

```
task-manager-mern/
│
├── client/        # React frontend
│   ├── src/
│   └── ...
│
├── server/        # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── ...
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/task-manager-mern.git
cd task-manager-mern
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🔐 API Endpoints

### Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### Tasks (Protected)

* GET `/api/tasks`
* POST `/api/tasks`
* PUT `/api/tasks/:id`
* DELETE `/api/tasks/:id`

---

## 🧪 Testing

You can test the API using Postman:

* Add header:

```
Authorization: Bearer YOUR_TOKEN
```

---

## 🎯 Learning Outcomes

Through this project, I learned:

* Building a full-stack MERN application
* Implementing authentication & authorization
* Working with MongoDB Atlas
* Handling REST APIs
* Managing state in React
* Deploying full-stack apps to production

---

## 🚀 Future Improvements

* Add task priority levels
* Add drag-and-drop UI
* Add notifications/reminders
* Improve UI with Tailwind CSS

---

## 👨‍💻 Author

**Mohamed**

* GitHub: https://github.com/Mdbe897

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and feel free to fork it!
