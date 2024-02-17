// Modal.js
import React, { useState } from 'react';

function Modal({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded shadow-md z-20">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p>{content}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
