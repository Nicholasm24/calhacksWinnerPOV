import React, { useState } from 'react';
import './Card.css'; // Import the CSS file

function Card({ className, onClick, title, options, correctAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null); // State to store selected option
  const [submissionResult, setSubmissionResult] = useState(null); // State to store submission result

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    if (selectedOption === correctAnswer) {
      setSubmissionResult('Success');
    } else {
      setSubmissionResult('Incorrect');
    }
  };

  return (
    <div
      className={`bg-white p-4 shadow-md rounded-md ${className}`}
      onClick={onClick}
    >
      {/* Content of your card */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="options">
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {submissionResult && <p>{submissionResult}</p>}
    </div>
  );
}

export default Card;
