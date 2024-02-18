// src/QuizBox.js
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import QuizBoxStyle from './QuizBoxStyle.css'

function QuizBox({ question, options, handleAnswer, answerMessage, handleCorrectAnswer, correctAnswerIndex, educationalContent }) {
    const [showModal, setShowModal] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    // Define the four options that will be displayed
    // and map over them to create buttons
    const modalContent = showModal ? (
        <div 
            style={{
                color: 'black',
            }}
        className="modal-box fixed top-0 left-0 w-full h-full bg-gray-200 p-10 z-50">
            <div className="grid grid-cols-2 gap-2 h-full">
                <div className="bg-white p-4 rounded-lg overflow-auto">
                    {/* Add your miscellaneous content here */}
                    {educationalContent}
                </div>
                <div className="grid grid-cols-2 gap-2">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
                        onClick={() => handleOptionClick(index + 1)}
                    >
                        {option}
                    </button>
                ))}
                </div>
            </div>
        </div>
        
    ) : null;

    useEffect(() => {
        const hideModal = () => {
          setShowModal(false);
          setShowButton(true);
        };
        document.addEventListener('click', hideModal);
        return () => {
          document.removeEventListener('click', hideModal);
        };
    }, []);

    const handleOptionClick = (optionIndex) => {
        // if the clicked option is the correct answer, increment the counter
        if (optionIndex === correctAnswerIndex) {
            handleCorrectAnswer();
        }

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

            {/* Show the modal */}
            <div className="absolute bottom-0 right-0">
                {/* Modal */}
                <div>
                    {modalContent}
                    {isOpen && (
                        <Modal
                            content={
                                <>
                                {modalContent}
                                <p className='mt-4'>{answerMessage}</p>
                                </>
                            }
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