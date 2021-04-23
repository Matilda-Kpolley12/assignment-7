const Router = require("express").Router();
const todoController = require("../controllers/todoController");

Router.get("/", todoController.allTodos);
Router.get("/:id", todoController.getTodo);
Router.post("/", todoController.createTodo);
Router.patch("/:id", todoController.updateTodos);
Router.patch("/:id/toggle", todoController.toggleCompleted);
Router.delete("/:id", todoController.deleteTodos);

module.exports = Router;
