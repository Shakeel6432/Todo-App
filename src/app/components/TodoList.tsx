import React from "react";
import Todo from "../types/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggle, onEdit }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between py-4">
          <TodoItem todo={todo} onToggle={onToggle} onEdit={onEdit} />
          <button
            onClick={() => onDelete(todo.id)}
            className="text-red-600 hover:text-red-800 ml-4 focus:outline-none"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;


