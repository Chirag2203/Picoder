import React from 'react';

const Step = ({ number, description }) => (
  <div className="flex items-center mb-4">
    <div className="w-8 h-8 bg-orange-700 text-white rounded-full flex items-center justify-center font-bold mr-2">
      {number}
    </div>
    <div className="max-w-xs">{description}</div>
  </div>
);

const Instructions = () => {
  return (
    <div className="flex flex-col items-start mt-4">
      <Step number={1} description="Select your language" />
      <Step number={2} description="Select theme and background color" />
      <Step number={3} description="Write code in the editor" />
      <Step number={4} description="Adjust the padding and height accordingly" />
      <Step number={4} description="Export your image!" />
      {/* Add more steps as needed */}
    </div>
  );
};

export default Instructions;
