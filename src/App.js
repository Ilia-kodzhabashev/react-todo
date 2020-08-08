import React, { useState, useEffect, usePromise } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button className="danger" onClick={() => removeTodo(index)}>
          X
        </button>
      </div>
      {todo.task}
    </div>
  );
}
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="task"
        className="input"
        value={value}
        placeholder="Add todo..."
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </form>
  );
}
function App() {
  const [todos, setTodos] = useState([
    {
      task: "Wash the dishes",
      isComplete: false,
    },
    {
      task: "Take the dog for a walk",
      isComplete: false,
    },
    {
      task: "Go to store",
      isComplete: false,
    },
    {
      task: "Feed the cat",
      isComplete: false,
    },
  ]);
  const addTodo = (task) => {
    const newTodos = [...todos, { task }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 2);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1 className="my-todo-list">My First Todo App</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
export default App;
