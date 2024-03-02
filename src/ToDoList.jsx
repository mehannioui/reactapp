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

  const addTask = () => {
    if (newTask !== '') {
      setTask((t) => [...t, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTask((t) => t.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index === 0) return;
    const newTasks = [...tasks];
    const temp = newTasks[index];
    newTasks[index] = newTasks[index - 1];
    newTasks[index - 1] = temp;
    setTask(newTasks);
  };

  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return;
    const newTasks = [...tasks];
    const temp = newTasks[index];
    newTasks[index] = newTasks[index + 1];
    newTasks[index + 1] = temp;
    setTask(newTasks);
  };

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
              &and;
            </button>
            <button className='move-button' onClick={() => moveTaskDown(index)}>
              &or;
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
