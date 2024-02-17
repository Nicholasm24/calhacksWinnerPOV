import React, { useEffect, useState } from 'react';
import penguin from './pictures/penguin.png'

const ProgressBar = ({ percentage }) => {
  const [barWidth, setBarWidth] = useState(0);
  const barHeightFraction = 0.1; // 1/10th of the container's height

  useEffect(() => {
    // Calculate the width of the progress bar based on the percentage
    const maxWidth = 100; // Maximum width of the progress bar in pixels
    const newWidth = (percentage / 100) * maxWidth;
    setBarWidth(newWidth);
  }, [percentage]);

  return (
    <div className="bg-blue-200 w-full md:w-1/3 relative">
      <img src={penguin} alt="Penguin" className="w-full h-auto" />
      <div className="bg-blue-500 absolute bottom-0 left-0 rounded-b-lg" style={{ width: `${barWidth}%`, height: `${barHeightFraction * 100}%` }}></div>
    </div>
  );
};

export default ProgressBar;