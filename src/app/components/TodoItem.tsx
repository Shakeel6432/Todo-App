import React, { useState } from "react";
import Todo from "../types/Todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(todo.id, editedText);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        className="form-checkbox h-6 w-6 text-blue-500 focus:ring-blue-400"
      />
      <div className="flex-grow">
        {!isEditing ? (
          <p className={`text-lg ${todo.completed ? "line-through text-gray-500" : ""}`} onClick={handleEdit}>
            {todo.text}
          </p>
        ) : (
          <input
            type="text"
            value={editedText}
            onChange={handleChange}
            onBlur={handleSaveEdit}
            autoFocus
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
          />
        )}
      </div>
      <button
        onClick={() => setIsEditing(!isEditing)}
        className={`text-sm ml-4 ${
          isEditing ? "text-gray-500 hover:text-gray-700" : "text-blue-500 hover:text-blue-700"
        }`}
      >
        {isEditing ? "Cancel" : "Edit"}
      </button>
      <button
        onClick={() => onToggle(todo.id)}
        className={`text-sm ml-4 ${
          todo.completed ? "text-gray-500 hover:text-gray-700" : "text-green-500 hover:text-green-700"
        }`}
      >
        {todo.completed ? "Undo" : "Done"}
      </button>
    </div>
  );
};

export default TodoItem;


