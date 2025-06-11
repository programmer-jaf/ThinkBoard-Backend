

# 🧠 ThinkBoard Backend

This is the backend API for **ThinkBoard**, built with **Node.js**, **Express.js**, and **MongoDB**. It handles authentication and TODO management functionalities. The backend is deployed on 🌐 **Render**.

---

## 🌍 Live API

🔗 **Base URL:** [https://thinkboard-backend.onrender.com](https://thinkboard-backend.onrender.com)

---

## 🚀 Features

### 🔐 Authentication

* 📝 **Sign Up** — Create a new user account.
* 🔑 **Sign In** — Login with existing credentials.
* 🚪 **Sign Out** — Log out of the session.

### ✅ TODO Management

* ➕ **Create TODO** — Add a new TODO item.
* 📋 **Get All TODOs** — Retrieve all TODO items for the user.
* 🔍 **Get TODO by ID** — Retrieve a specific TODO by its ID.
* ✏️ **Update TODO by ID** — Update an existing TODO item by ID.
* 🗑️ **Delete TODO by ID** — Delete a TODO item by ID.

---

## 🛠 Tech Stack

* ⚙️ **Backend:** Node.js, Express.js
* 🗄️ **Database:** MongoDB (with Mongoose ODM)
* 🔒 **Authentication:** JWT / Sessions
* 🚀 **Deployment:** Render

---

## 📦 Installation

### 🖥️ Clone the repository:

```bash
git clone https://github.com/programmer-jaf/ThinkBoard-Backend.git
cd ThinkBoard-Backend
```

### 📦 Install dependencies:

```bash
npm install
```

### 📝 Create `.env` file:

```env
PORT=5000
CORS_ORIGIN=
MONGODB_URI=
JWT_SECRET=
JWT_EXPIRES_IN=
NODE_ENV=
```

### 🚀 Start the server:

```bash
npm start
```

🟢 Server will run on `http://localhost:5000` by default.

---

## 📊 API Endpoints

### 🔐 Auth Routes

| 🔧 Method | 🌐 Endpoint     | 📄 Description    |
| --------- | --------------- | ----------------- |
| POST      | `/auth/signup`  | Register new user |
| POST      | `/auth/signin`  | Login user        |
| POST      | `/auth/signout` | Logout user       |

### 📝 TODO Routes

| 🔧 Method | 🌐 Endpoint | 📄 Description    |
| --------- | ----------- | ----------------- |
| POST      | `/todo`     | Create new TODO   |
| GET       | `/todo`     | Get all TODOs     |
| GET       | `/todo/:id` | Get TODO by ID    |
| PUT       | `/todo/:id` | Update TODO by ID |
| DELETE    | `/todo/:id` | Delete TODO by ID |

---

## 💡 Contribution

🚀 **Open for contributions!** If you'd like to improve the project or add new features, feel free to:

1️⃣ **Fork** the repository
2️⃣ **Create a new branch**
3️⃣ **Commit your changes**
4️⃣ **Open a Pull Request**

---

## 🎯 Future Feature Ideas

* 🌈 User profile management
* 📊 TODO priorities & labels
* 🗓️ Deadlines & reminders
* 🔔 Notification system
* 📱 Frontend integration
* 📈 Analytics for TODO completion

---

## 📄 License

📜 This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

Made with ❤️ by [**programmer-jaf**](https://github.com/programmer-jaf)

---

---

👉 **OPTIONAL:**
If you want, I can also generate:

* 🔥 **Professional Shields.io Badges**
* 📑 **API Docs in Swagger/OpenAPI style**
* 🌐 **Frontend README (if you’re building fullstack)**
* 📤 **Deploy instructions for Render, Railway, or Vercel**

---

