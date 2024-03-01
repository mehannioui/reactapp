import React, { useState } from 'react';

function ToDoList({ todos }) {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {};

  const addTask = () => {};

  const deleteTask = (index) => {};

  const moveTaskUp = (index) => {};

  const moveTaskDown = (index) => {};

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

export default ToDoList;
