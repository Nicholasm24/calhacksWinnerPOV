import ProgressBar from './progressBar';
import Modal from './Modal';
import './App.css';
import React, { useState, useEffect } from 'react';
import QuizBox from './QuizBox';

function App() {

  // State variable to keep track of the number of correct answers
  const [counter, setCounter] = useState(0);

  // function to increment the counter
  const handleCorrectAnswer = () => {
    setCounter(counter + 1);
    console.log('counter: ', counter);
  };
  
  // Define state variables for the modal and selected answer
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(true);


  // define the modal content that will be displayed no matter what
  const modalContent = 'This is the correct answer: ...'

  const handleAnswer11 = (answer) => {
    setSelectedAnswer(answer);
    setIsOpen(true);
  };

  const modal11 = (title, option1, option2, option3, option4) => showModal ? (
    <div className="grid grid-cols-2 gap-2">
       <h1>{title}</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAnswer11(1)}>{option1}</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAnswer11(2)}>{option2}</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAnswer11(3)}>{option3}</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAnswer11(4)}>{option4}</button>
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

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div>
            <a href="#" className="text-white text-lg font-semibold">
              Treenance
            </a>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Dashboard
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Reports
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Settings
            </a>
          </div>
        </div>
      </nav>

      {/* Quiz Area */}
      <div className="container mx-auto mt-4 px-4 flex space-x-6">
        {/* Main Content */}
        <ProgressBar counter={counter} />
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">Treenance</h1>
          <div className="grid grid-cols-3 gap-2">

            <QuizBox
              question="Why is budgeting considered the first step in managing personal finances?"
              options={['A. Budgeting is the process of planning how to spend money, which helps identify areas to reduce spending and increase savings.', 
              'B. Budgeting is a way to track how much money is spent on entertainment.',
              'C. Budgeting is only necessary for people with high incomes.',
              'D. Budgeting is a tool for calculating annual taxes.']}
              handleAnswer={handleAnswer11}
              answerMessage={'The correct answer is A. Budgeting is the process of planning how to spend money, which helps identify areas to reduce spending and increase savings. \n\n\nIt provides a clear picture of your financial situation, enabling you to make informed decisions about saving and spending. While saving is the ultimate goal, budgeting is the tool that helps you reach that goal.'}
              handleCorrectAnswer={handleCorrectAnswer}
              correctAnswerIndex={1}
              educationalContent={
              `Why?
              Budgeting is the process of creating a plan to spend your money. This spending plan, or budget, is a detailed plan that shows how much money you expect to earn or receive (your income) and how you will distribute it among various expenses.
              Once you have a budget, you can see where your money is going, which can help you identify areas where you can reduce spending. The money you save from reducing spending can then be put into savings.
              So, while saving is the goal, budgeting is the tool that helps you understand your financial situation and make informed decisions about how to reach that goal. Therefore, budgeting usually comes before saving. However, the two go hand in hand and are both important parts of sound financial management.
              
              `}
            />

            <QuizBox
              question="Question 1. Correct answers will lead the tree to grow."
              options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
              handleAnswer={handleAnswer11}
            />
            
            <QuizBox
              question="Question 1. Correct answers will lead the tree to grow."
              options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
              handleAnswer={handleAnswer11}
            />

            <QuizBox
              question="Question 1. Correct answers will lead the tree to grow."
              options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
              handleAnswer={handleAnswer11}
            />

            <QuizBox
              question="Question 1. Correct answers will lead the tree to grow."
              options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
              handleAnswer={handleAnswer11}
            />

            <QuizBox
              question="Question 1. Correct answers will lead the tree to grow."
              options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
              handleAnswer={handleAnswer11}
            />

            <QuizBox
              question="Question 1. Correct answers will lead the tree to grow."
              options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
              handleAnswer={handleAnswer11}
            />

            <QuizBox
              question="Question 1. Correct answers will lead the tree to grow."
              options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
              handleAnswer={handleAnswer11}
            />

            <QuizBox
              question="Question 1. Correct answers will lead the tree to grow."
              options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
              handleAnswer={handleAnswer11}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;