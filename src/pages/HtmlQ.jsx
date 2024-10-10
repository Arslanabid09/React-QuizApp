import React, { useEffect } from 'react';
import { HtmlQuiz } from '../Quizes/Html';
import { useQuize } from '../Context/QuizContext';
import { useNavigate } from 'react-router-dom';

const HtmlQ = () => {
  const { handleNextQuestion, handleAnswer, currentIndex, selectedAnswer, isAnswered } = useQuize();
  let navigate = useNavigate();

  const currentQuestion = HtmlQuiz[currentIndex];

  useEffect(() => {
    if (!currentQuestion) {
      navigate('/Result');
    }
  }, [currentQuestion, navigate]);

  if (!currentQuestion) {
    return null;
  }
  const isLastQuestion = currentIndex === HtmlQuiz.length;

  return (
    <div className="w-full h-screen flex flex-col space-y-10 justify-center px-2 text-center">
      <span className="text-start underline-offset-4 px-2 underline text-black font-bold text-lg">
        {currentIndex + 1}/15
      </span>
      
      <h1 className="text-3xl text-center text-neutral-700 md:text-4xl animate-slideIn">
        {currentQuestion?.question}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:gap-y-10 gap-y-4 px-2">
        {currentQuestion?.answers?.map((answer, index) => (
          <div key={index}>
            <button
              onClick={() => handleAnswer(answer)}  // Pass the full answer object
              className={`text-neutral-800 font-bold  text-lg border-2 w-full py-2 px-10 rounded-md transition-all ease-in-out duration-300 animate-slideup
                ${selectedAnswer === answer ? (answer.correct ? 'text-white bg-green-700 border-none' : 'bg-red-700 text-white border-none') : ''}
                ${isAnswered ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
              `}
              disabled={isAnswered}
            >
              {answer.text}
            </button>
          </div>
        ))}
      </div>

      {isAnswered && (
        <button
          onClick={isLastQuestion ? () => navigate('/Result') : handleNextQuestion}  // Handle navigation after last question
          className={`mt-10 bg-blue-500 font-bold mx-auto text-white w-2/4 py-2 px-4 rounded-lg hover:bg-blue-600
            ${isLastQuestion ? 'opacity-50 cursor-not-allowed' : ''}  // Disable button if it's the last question
          `}
          disabled={isLastQuestion}  // Disable the button on the last question
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default HtmlQ;
