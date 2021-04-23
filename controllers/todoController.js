const Todo = require("../models/Todo");

const allTodos = async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json({ todos });
};

const getTodo = async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findById(id);
  res.status(200).json({ todo });
};

const createTodo = async (req, res) => {
  const { text, completed } = req.body;
  if (text === "") {
    return res.status(400).json({ message: "Please enter a todo." });
  }
  const todo = await Todo.create({ text, completed });
  res.status(201).json({ todo });
};

const updateTodos = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  if (text === "") {
    return res.status(400).json({ message: "Field cannot be empty." });
  }
  const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ todo });
};

const toggleCompleted = async (req, res) => {
  const { id } = req.params;
  let todo = await Todo.findById(id);

  if (todo.completed) {
    todo = await Todo.findByIdAndUpdate(
      id,
      { completed: false },
      { new: true }
    );
    return res.status(200).json({ todo });
  } else {
    todo = await Todo.findByIdAndUpdate({ completed: true }, { new: true });
    return res.status(200).json({ todo });
  }
};

const deleteTodos = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.status(200).json({ message: "Deleted Successfully" });
};

module.exports = {
  allTodos,
  getTodo,
  createTodo,
  updateTodos,
  toggleCompleted,
  deleteTodos,
};
