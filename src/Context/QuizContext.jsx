import { useContext, createContext, useState } from "react";

const QuizeContext = createContext();

// Custom hook for quizes
export const useQuize = () => {
  return useContext(QuizeContext);
};

// Provider for quizes
export const QuizeProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // State to get the user's answer
  
  const [isAnswered, setIsAnswered] = useState(false); // To disable options after one use

  const handleAnswer = (answer) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
      setIsAnswered(true);

      // Increment the score if the answer is correct
      if (answer.correct) {
        setScore((prev) => prev + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setSelectedAnswer(null);
    setIsAnswered(false);
    if(currentIndex > 15){
        setCurrentIndex(0)
        Reset();
    }
  };
  const Reset = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  return (
    <QuizeContext.Provider
      value={{
        handleAnswer,
        handleNextQuestion,
        Reset,
        currentIndex,
        selectedAnswer,
        isAnswered,
        score,
      }}
    >
      {children}
    </QuizeContext.Provider>
  );
};
