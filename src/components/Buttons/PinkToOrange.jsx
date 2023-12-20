import React from 'react';
import { Link } from 'react-router-dom';

const PinkToOrange = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="text-white transition-all duration-5   00 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      {text}
    </Link>
  );
};

export default PinkToOrange;
