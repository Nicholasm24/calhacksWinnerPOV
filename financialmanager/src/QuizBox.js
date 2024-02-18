// src/QuizBox.js
import React, { useState, useEffect } from 'react';
import Modal from './Modal';

function QuizBox({ question, options, handleAnswer }) {
    const [showModal, setShowModal] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const modalContent = showModal ? (
        <div className="grid grid-cols-2 gap-2">
            {options.map((option, index) => (
                <button
                    key={index}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleOptionClick(index + 1)}
                >
                    {option}
                </button>
            ))}
        </div>
    ) : null;

    useEffect(() => {
        const hideModal = () => {
          setShowModal(false);
        };
        document.addEventListener('click', hideModal);
        return () => {
          document.removeEventListener('click', hideModal);
        };
    }, []);

    const handleOptionClick = (optionIndex) => {
        handleAnswer(optionIndex);
        setIsOpen(true);
    };

    return (
        <div className="flex flex-col p-3 bg-green-500 h-36 rounded-lg relative">
            {showButton && (
                // Show the question as a button
                // When the button is clicked, show the modal
                // and hide the button
                <button
                    onClick={(event) => {
                        event.stopPropagation();
                        setShowModal(true);
                        setShowButton(false);
                    }}
                >
                    {question}
                </button>
            )}

            <div className="absolute bottom-0 right-0">
                {/* Modal */}
                <div>
                    {modalContent}
                    {isOpen && (
                        <Modal
                            content={modalContent}
                            onClose={() => {
                                // Close the modal and show the button
                                setIsOpen(false);
                                setShowButton(true);
                            }}
                            selectedAnswer={selectedAnswer}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default QuizBox;