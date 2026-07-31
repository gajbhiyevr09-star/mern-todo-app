# 📝 MERN Todo Application with Automated Testing

A full-stack MERN Todo application developed as part of a QA Engineer Assignment.

This project demonstrates complete CRUD functionality along with Backend API Testing using Jest & Supertest and Frontend End-to-End Testing using Cypress.

---

# 🚀 Tech Stack

## Frontend

- React.js
- Axios
- React Icons
- CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Testing

- Jest
- Supertest
- Cypress

---

# 📂 Project Structure

```
mern-todo-app
│
├── todo_backend
│   ├── tests
│   ├── utils
│   ├── app.js
│   ├── server.js
│   └── jest.config.js
│
├── todo_frontend
│   ├── cypress
│   ├── src
│   └── cypress.config.js
│
└── README.md
```

---

# ✨ Features

- Add Todo
- Update Todo
- Mark Todo Complete
- Delete Todo
- MongoDB Integration
- REST APIs
- Automated API Testing
- End-to-End UI Testing

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/gajbhiyevr09-star/mern-todo-app.git
```

---

## Backend

```bash
cd todo_backend
npm install
npm start
```

Runs on

```
http://localhost:5000
```

---

## Frontend

```bash
cd todo_frontend
npm install
npm start
```

Runs on

```
http://localhost:3000
```

---

# 🧪 Backend Testing

Run Jest & Supertest

```bash
cd todo_backend

npm test
```

---

## Tested APIs

- POST /add
- GET /get
- PUT /update/:id
- PUT /edit/:id
- DELETE /delete/:id

---

# 🌐 Frontend Testing

Run Cypress

```bash
cd todo_frontend

npx cypress open
```

Select

```
E2E Testing
```

Then run

```
todo.cy.js
```

---

## Cypress Test Cases

✔ Load Application

✔ Add Todo

✔ Edit Todo

✔ Delete Todo

---

# 📊 Code Coverage

Backend Coverage

| Metric | Coverage |
|---------|-----------|
| Statements | **83.78%** |
| Functions | **64.70%** |
| Lines | **83.78%** |
| Branches | **100%** |

Coverage generated using Jest + Istanbul.

---

# 📸 Screenshots

## Application

_Add your application screenshot here._

```
images/app.png
```

---

## Jest Test Results

_Add your Jest terminal screenshot._

```
images/jest-results.png
```

---

## Cypress Results

_Add your Cypress screenshot._

```
images/cypress-results.png
```

---

## Coverage Report

_Add your coverage report screenshot._

```
images/coverage.png
```

---

# 👨‍💻 Author

**Vaibhav Gajbhiye**

GitHub

https://github.com/gajbhiyevr09-star

---

# 📄 License

This project was developed for QA Engineer Assessment purposes.
