import { useState, useEffect } from "react";
import { Input, Button, Checkbox, Form } from "semantic-ui-react";

const fetchQuery = async ({ uri, method = "GET", body = null }) => {
  const response = await fetch(uri, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuery({ uri: "http://localhost:4000/todo" });
      setTodos(data.todos);
    };
    fetchData();
  }, [todos]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newTodo = {
      text: todo,
      completed: false,
    };

    const data = await fetchQuery({
      uri: "http:/localhost:4000/todo",
      method: "POST",
      body: newTodo,
    });
    setTodos([...todos, data.todo.text]);
    setTodo("");
  };

  const toggleCompleted = async (id) => {
    await fetchQuery({
      uri: `http://localhost:4000/todo/${id}/toggle`,
      method: "PATCH",
    });
  };

  const deleteTodo = async (id) => {
    await fetchQuery({
      uri: `http://localhost:4000/todo/${id}`,
      method: "DELETE",
    });
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Field>
          <label>Todo</label>
          <Input
            type="text"
            placeholder="Todo..."
            value={todo.item}
            onChange={(e) => setTodo(e.target.value)}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
      <h1>Rooooool</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.text}
            <button onClick={() => toggleCompleted(todo._id)}>
              {todo.completed ? "Completed" : "Incomplete"}
            </button>
            <button>Edit</button>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
