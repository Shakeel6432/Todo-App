import React, { useState } from "react";

interface TodoInputProps {
  onSubmit: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center border-d-2 border-b-2 border-blue-500 py-2">
        <input
          type="text"
          placeholder="Enter a new todo"
          value={text}
          onChange={handleChange}
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoInput;


