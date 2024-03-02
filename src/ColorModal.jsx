import React from 'react';

function ColorModal({ isOpen, colors, selectedColor, onSelect, onClose }) {
  if (!isOpen) return null;

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Select a color</h2>
        {colors.map((color) => (
          <label key={color}>
            <input
              type='radio'
              value={color}
              checked={selectedColor === color}
              onChange={() => onSelect(color)}
            />
            {color}
          </label>
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ColorModal;
