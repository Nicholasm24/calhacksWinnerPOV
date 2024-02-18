// Modal.js
import React, { useState } from 'react';

function Modal({ content, onClose, selectedAnswer }) {

  console.log('selectedAnswer: ${selectedAnswer}');
  
  return (
    <div>
      <p>{content}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Modal;
