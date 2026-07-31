require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./models/Todo");

const app = express();

app.use(cors());
app.use(express.json());

//console.log(process.env.MONGODB_URI);
 //MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));


/*if (process.env.NODE_ENV !== "test") {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB Connection Failed:", err));
}*/
// Routes

app.post("/add", (req, res) => {
  const { task } = req.body;

  TodoModel.create({ task })
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json(err));
});

app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json(err));
});

app.put("/edit/:id", (req, res) => {
  const { id } = req.params;

  TodoModel.findByIdAndUpdate(id, { done: true }, { new: true })
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json(err));
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  TodoModel.findByIdAndUpdate(id, { task }, { new: true })
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json(err));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  TodoModel.findByIdAndDelete(id)
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json(err));
});

module.exports = app;