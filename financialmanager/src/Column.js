import React, { useEffect, useState } from 'react';
import Card from './Card';

function Column() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex h-screen" style={{ backgroundColor: '#f3f' }}>
      <div
        style={{ height: `${viewportHeight}px`, marginRight: '10px' }}
        className="flex-1 bg-sky-950"
      ></div>
      <div
        style={{ height: `${viewportHeight}px`, marginRight: '10px' }}
        className="flex-1 bg-sky-950"
      >
        <Card
          className="m-2"
          title="What is the best way to start saving money?"
          options={[
            'Put all your money into a savings account.',
            'Invest in high-risk stocks.',
            'Create a budget and set aside a portion of your income for savings.',
            'Ignore saving and focus on earning more money.',
          ]}
          correctAnswer="Create a budget and set aside a portion of your income for savings."
        />
        <Card
          className="m-2"
          title="Is it better to save money in a savings account or invest it in stocks?"
          options={[
            'Always invest in stocks as they offer higher returns.',
            'Put all your savings in a savings account for safety.',
            'It depends on your financial goals and risk tolerance.',
            'Avoid both and keep cash under your mattress.',
          ]}
          correctAnswer="It depends on your financial goals and risk tolerance."
        />
        <Card
          className="m-2"
          title="What is When is the best time to start saving for retirement?"
          options={[
            "In your 50s when you're closer to retirement age.",
            'Just rely on government support.',
            'As early as possible, ideally in your 20s or 30s.',
            "After you've paid off all your debts.",
          ]}
          correctAnswer="Create a budget and set aside a portion of your income for savings."
        />
      </div>
      <div
        style={{ height: `${viewportHeight}px` }}
        className="flex-1 bg-sky-950"
      ></div>
    </div>
  );
}

export default Column;
