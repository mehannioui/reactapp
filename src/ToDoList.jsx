import React, { useState } from 'react';
import ColorModal from './ColorModal';

function ToDoList({ todos }) {
  const [tasks, setTask] = useState([
    { text: 'Learn the basics of JavaScript (ES6)', color: '' },
    {
      text: 'Understand the concept of React and its component-based architecture',
      color: '',
    },
    { text: 'Set up a React development environment', color: '' },
    { text: 'Create your first React application', color: '' },
    { text: 'Learn how to use React components', color: '' },
    { text: 'Understand the concept of state and props in React', color: '' },
  ]);

  const [newTask, setNewTask] = useState('');
  const colorOptions = ['Red', 'Blue', 'Green', 'Yellow'];
  const [selectedColor, setSelectedColor] = useState('');
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const [editingColorIndex, setEditingColorIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask !== '') {
      setTask((t) => [...t, { text: newTask, color: selectedColor }]);
      setNewTask('');
      setSelectedColor('');
    }
  };

  const handleColorChange = (color, index) => {
    const newTasks = [...tasks];
    newTasks[index].color = color;
    setTask(newTasks);
    setIsColorModalOpen(false);
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
              style={{ backgroundColor: task.color }}
              onClick={() => {
                setEditingColorIndex(index);
                setIsColorModalOpen(true);
              }}></div>

            <span className='text'>{task.text}</span>
            <div className='buttons'>
              <button
                className='delete-button'
                onClick={() => deleteTask(index)}>
                Delete
              </button>
              <button className='move-button' onClick={() => moveTaskUp(index)}>
                &and;
              </button>
              <button
                className='move-button'
                onClick={() => moveTaskDown(index)}>
                &or;
              </button>
            </div>
          </li>
        ))}
      </ol>
      <ColorModal
        isOpen={isColorModalOpen}
        colors={colorOptions}
        selectedColor={tasks[editingColorIndex]?.color}
        onSelect={(color) => handleColorChange(color, editingColorIndex)}
        onClose={() => setIsColorModalOpen(false)}
      />
    </div>
  );
}

export default ToDoList;
