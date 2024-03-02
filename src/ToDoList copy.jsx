import React, { useState } from 'react';

function ToDoList({ todos }) {
  const [tasks, setTask] = useState([
    'Learn the basics of JavaScript (ES6)',
    'Understand the concept of React and its component-based architecture',
    'Set up a React development environment',
    'Create your first React application',
    'Learn about JSX and how it differs from HTML',
    'Understand the concept of state and props in React',
    'Learn about React Hooks and how to use them',
    'Understand the component lifecycle in React',
    'Learn how to handle events in React',
    'Understand conditional rendering in React',
    'Learn how to work with forms in React',
    'Understand the concept of lifting state up',
    'Learn about using keys in lists',
    'Understand the concept of Context API for state management',
    'Learn about routing in React using React Router',
    'Understand how to fetch data from an API in React',
    'Learn about testing React applications',
    'Build a project using React to solidify your understanding',
  ]);
  const [newTask, setNewTask] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

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
      <h1>React Learning Tasks</h1>
      <div>
        <input
          type='text'
          placeholder='Enter a task...'
          value={newTask}
          onChange={handleInputChange}
        />
        <div>
          <label>
            <input
              type='radio'
              value='Red'
              name='color'
              onChange={(e) => setSelectedColor(e.target.value)}
            />{' '}
            Red
          </label>
          <label>
            <input
              type='radio'
              value='Blue'
              name='color'
              onChange={(e) => setSelectedColor(e.target.value)}
            />{' '}
            Blue
          </label>
          <label>
            <input
              type='radio'
              value='Green'
              name='color'
              onChange={(e) => setSelectedColor(e.target.value)}
            />{' '}
            Green
          </label>
          <label>
            <input
              type='radio'
              value='Yellow'
              name='color'
              onChange={(e) => setSelectedColor(e.target.value)}
            />{' '}
            Yellow
          </label>
        </div>
        <button className='add-button' onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <div
              className='apple-dots'
              style={{ backgroundColor: selectedColor }}></div>
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
