function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onEdit(todo.id)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}
export default TodoItem;
