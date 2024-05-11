'use client'

import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import Todo from "./types/Todo";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "Learn Next.js", completed: false },
    { id: "2", text: "Build a Todo App", completed: false },
  ]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <img src="./logo.png" alt="Todo App Logo" className="h-40 w-52" />
      </div>
      <div className="mb-6">
        <TodoInput onSubmit={addTodo} />
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Your Todos</h2>
        {todos.length > 0 ? (
          <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} onEdit={editTodo} />
        ) : (
          <p className="text-gray-500">No todos found. Add some todos to get started!</p>
        )}
      </div>
      <p className="text-sm text-gray-500 mt-4">This is a simple todo app built with Next.js and Tailwind CSS.</p>
    </div>
  );
};

export default Home;
