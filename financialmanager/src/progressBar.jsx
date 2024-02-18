import React, { useEffect, useState } from 'react';
import penguin from './pictures/penguin.png'
import tree1 from './pictures/tree1.png'
import tree2 from './pictures/tree2.png'
import tree3 from './pictures/tree3.png'
import tree4 from './pictures/tree4.png'
import tree5 from './pictures/tree5.png'

const ProgressBar = ({ counter }) => {
  let imageSrc;
  if (counter < 2) {
    imageSrc = tree1;
  } else if (counter < 4) {
    imageSrc = tree2;
  } else if (counter < 6) {
    imageSrc = tree3;
  } else if (counter < 8) {
    imageSrc = tree4;
  } else {
    imageSrc = tree5;
  }

  return (
    <div className="bg-blue-200 w-full md:w-1/3 relative">
      <img src={imageSrc} alt="tree" className="w-full h-auto" />
      {/* Remove the HTML comment syntax */}
      {/* <div className="bg-blue-500 absolute bottom-0 left-0 rounded-b-lg" style={{ width: `${barWidth}%`, height: `${barHeightFraction * 100}%` }}></div> */}
    </div>
  );
};

export default ProgressBar;