import ProgressBar from './progressBar';
import Modal from './Modal';
import './App.css';
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
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
  const modalContent = 'This is the correct answer: ...';

  const handleAnswer11 = (answer) => {
    setSelectedAnswer(answer);
    setIsOpen(true);
  };

  const modal11 = (title, option1, option2, option3, option4) =>
    showModal ? (
      <div className="grid grid-cols-2 gap-2">
        <h1>{title}</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleAnswer11(1)}
        >
          {option1}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleAnswer11(2)}
        >
          {option2}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleAnswer11(3)}
        >
          {option3}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleAnswer11(4)}
        >
          {option4}
        </button>
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
    <div className="gradient-guy min-h-screen bg-gray-200">
      {/* Quiz Area */}
      <div className="gradient-guy-two container mx-auto mt-4 px-4 flex space-x-6">
        {/* Main Content */}
        <ProgressBar className="photo-app" counter={counter} />
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">Budgeting Dashboard</h1>
          <div className="grid grid-cols-3 gap-2">
            <QuizBox className="quiz-cards"
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
              Why is budgeting considered the first step in managing personal finances?
              `}
            />

            <QuizBox className="quiz-cards"
              question="What is the correct way to calculate net income?"
              options={['A. Net income is calculated by subtracting total expenses from total income.',
              'B. Net income is calculated by adding total expenses to total income.',
              'C. Net income is the total income before any deductions.',
              'D. Net income is the total of all taxes paid.']}
              handleAnswer={handleAnswer11}
              answerMessage={'The correct answer is A. Net income is calculated by subtracting total expenses (including taxes and deductions for employer-provided programs) from total income. This is the amount you actually take home and have available for spending and saving.'}
              handleCorrectAnswer={handleCorrectAnswer}
              correctAnswerIndex={1}
              educationalContent={`
              1.1 Calculate Income
              The cornerstone of a successful budget is your net income. This is the amount you actually bring home after deductions for taxes and employer-sponsored programs like retirement plans and health insurance have been made from your total wages or salary. Concentrating on your gross salary instead of your net income can result
              in overspending, as it may give the illusion of having more disposable income than you actually do. If you’re self-employed, a contractor, a gig worker, or a freelancer, it’s crucial to meticulously record your contracts and payments to effectively manage an irregular income stream.
              What is the correct way to calculate net income?
              `}
            />

            <QuizBox className="quiz-cards"
              question="What is the correct sequence of steps to manage your personal finances effectively?"
              options={['A. Start tracking your daily spending, calculate your net income, and then list your fixed and variable expenses.',
              'B. Calculate your net income, start tracking your daily spending, and then list your fixed and variable expenses.',
              'C. List your fixed and variable expenses, calculate your net income, and then start tracking your daily spending',
              'D. Calculate your net income, list your fixed and variable expenses, and then start tracking your daily spending.']}
              handleAnswer={handleAnswer11}
              correctAnswerIndex={1}
              educationalContent={`
              1.3 Set Goals 
              Before you begin analyzing the financial data you’ve 
              gathered, establish a list of your short-term and long-term financial objectives. Short-term objectives, which could include establishing an emergency fund or reducing credit card debt, should be achievable within one to three years. Long-term objectives, such as saving for retirement or funding your child’s education, may require decades to fulfill. Keep in mind that your goals are not rigid and can be adjusted as needed, but having them can provide motivation to adhere to your budget. For instance, knowing that you’re saving for a vacation might make it easier to curb spending.
              `}
            />

            <QuizBox className="quiz-cards"
              question="Question 1. Correct answers will lead the tree to grow."
              options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
              handleAnswer={handleAnswer11}
            />

            <QuizBox className="quiz-cards"
              question="Question 1. Correct answers will lead the tree to grow."
              options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
              handleAnswer={handleAnswer11}
            />

            <QuizBox className="quiz-cards"
              question="Question 1. Correct answers will lead the tree to grow."
              options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
              handleAnswer={handleAnswer11}
            />

            <QuizBox className="quiz-cards"
              question="Question 1. Correct answers will lead the tree to grow."
              options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
              handleAnswer={handleAnswer11}
            />

            <QuizBox className="quiz-cards"
              question="Question 1. Correct answers will lead the tree to grow."
              options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
              handleAnswer={handleAnswer11}
            />

            <QuizBox className="quiz-cards"
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
