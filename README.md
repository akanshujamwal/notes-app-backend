# 📝 Notes App Backend

A RESTful API backend for a Notes application built with **Node.js**, **Express**, and **MongoDB**.
This is my first backend project — it supports full **CRUD** operations to create, read, update, and delete notes.

---

## 🔗 Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Postman Collection](#-postman-collection)
- [What I Learned](#-what-i-learned)
- [Author](#-author)

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js v5 | Web framework & routing |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling (ODM) |
| dotenv | Environment variable management |
| Nodemon | Auto-restart during development |

---

## 📁 Project Structure

```
notes-app-backend/
├── src/
│   ├── db/
│   │   └── db.js              # MongoDB connection logic
│   ├── models/
│   │   └── note.model.js      # Mongoose schema for Note
│   └── app.js                 # Express app & all route definitions
├── server.js                  # Entry point — connects DB and starts server
├── .env                       # Environment variables (not committed)
├── .gitignore
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akanshujamwal/notes-app-backend.git
   cd notes-app-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root of the project:
   ```env
   MONGO_URL=mongodb://localhost:27017/notesapp
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   Server runs at → `http://localhost:3001`
   Auto-restarts on file changes via **Nodemon** ✅

---

## 🔐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URL` | MongoDB connection string | `mongodb://localhost:27017/notesapp` |

> ⚠️ Never commit your `.env` file to GitHub. It is already added to `.gitignore`.

---

## 📡 API Endpoints

Base URL: `http://localhost:3001`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/saveNotes` | Create a new note |
| `GET` | `/getNotes` | Fetch all notes |
| `PATCH` | `/updateNote/:id` | Update a note by ID |
| `DELETE` | `/deleteNote/:id` | Delete a note by ID |

---

### ➕ Create a Note

**Request**
```http
POST /saveNotes
Content-Type: application/json

{
  "title": "My First Note",
  "description": "This is the body of the note."
}
```

**Response** `201 Created`
```json
{
  "message": "Note created sucessfully"
}
```

---

### 📋 Get All Notes

**Request**
```http
GET /getNotes
```

**Response** `200 OK`
```json
{
  "message": "Notes feched sucessfully",
  "notes": [
    {
      "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
      "title": "My First Note",
      "description": "This is the body of the note.",
      "__v": 0
    }
  ]
}
```

---

### ✏️ Update a Note

**Request**
```http
PATCH /updateNote/64f1a2b3c4d5e6f7a8b9c0d1
Content-Type: application/json

{
  "title": "Updated Title",
  "description": "Updated description."
}
```

**Response** `200 OK`
```json
{
  "message": "Note updated sucessfully"
}
```

---

### 🗑️ Delete a Note

**Request**
```http
DELETE /deleteNote/64f1a2b3c4d5e6f7a8b9c0d1
```

**Response** `200 OK`
```json
{
  "message": "Note deleted sucessfully"
}
```

---

## 📬 Postman Collection

A ready-to-use Postman collection is included in this repository for easy API testing.

### How to Import

1. Open **Postman**
2. Click **Import** (top left)
3. Select **File** and choose:
   ```
   postman/notes-app.postman_collection.json
   ```
4. All API requests will be loaded automatically ✅

> 💡 Make sure your server is running on `http://localhost:3001` before sending requests.

---

## 📌 What I Learned

This is my first backend project. Here's what I picked up while building it:

- Setting up a **Node.js + Express** server from scratch
- Connecting to **MongoDB** using **Mongoose**
- Writing a **Mongoose Schema** to define data structure
- Building **RESTful API** routes for full CRUD operations
- Separating concerns — database logic, models, routes, and server entry point
- Managing environment variables securely with **dotenv**
- Testing and debugging APIs using **Postman**

---

## 👤 Author

**Akanshu Jamwal**
GitHub: [@akanshujamwal](https://github.com/akanshujamwal)

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
