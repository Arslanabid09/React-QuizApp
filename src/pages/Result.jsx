import React from 'react';
import { useQuize } from '../Context/QuizContext';
import { Link } from 'react-router-dom';

const Result = () => {
  let {score,Reset} = useQuize();
  const handleReset = ()=>{
    Reset();
  }
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center animate-slideup">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Quiz Results</h1>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-green-500">Your Score: {score} / 15</h2>
          <h3 className="text-xl text-gray-600 mt-2">Great Job! 👍</h3>
        </div>
        <div className="flex justify-center space-x-4">
          <Link to={'/'} onClick={handleReset} className="bg-orange-600 text-white py-3 px-6 rounded hover:bg-orange-700 transition duration-200">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
