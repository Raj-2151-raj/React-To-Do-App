import TodoItem from "./TodoItem";

function TodoListt({ todos, onDelete, onToggle, onEdit }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
export default TodoListt;
