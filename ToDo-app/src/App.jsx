import { useState } from "react";
import Header from "./Components/Header";
import TodoListt from "./Components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);

  const addTodo = () => {
    if (!text.trim()) return;

    if (editingId !== null) {
      setTodos(
  todos.map((todo) =>
    todo.id === editingId ? { ...todo, text } : todo
  )
);

      setEditingId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }

    setText("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed:
           !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    const selected = todos.find((todo) => todo.id === id);
    setText(selected.text);
    setEditingId(id);
  };

  return (
    <div className="app-container">
      <Header />
      <input
        type="text"
        placeholder="Enter Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo} className="gradient-button">
        {editingId !== null ? "Update" : "Add"}
      </button>

      <TodoListt
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
