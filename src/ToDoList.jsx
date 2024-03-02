import React, { useState } from 'react';

function ToDoList({ todos }) {
  const [tasks, setTask] = useState([
    'Eat Breakfast',
    'Take a shower',
    'Walk the dog',
    'Go to work',
    'Eat lunch',
    'Go home',
    'Eat dinner',
    'Go to bed',
  ]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {};

  const deleteTask = (index) => {};

  const moveTaskUp = (index) => {};

  const moveTaskDown = (index) => {};

  return (
    <div className='to-do-list'>
      <h1>To-Do-List</h1>
      <div>
        <input
          type='text'
          placeholder='Enter a task...'
          value={newTask}
          onChange={handleInputChange}
        />
        <button className='add-button' onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete-button' onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className='move-button' onClick={() => moveTaskUp(index)}>
              ⬆️
            </button>
            <button className='move-button' onClick={() => moveTaskDown(index)}>
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
