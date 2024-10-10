import React, { useEffect, useState } from 'react';
import QuizCategories from '../Quizes/Categories';
import HtmlQ from './HtmlQ';
import JSQuiz from './JSQuiz';
import ReactQ from './ReactQ';
import { Link } from 'react-router-dom';
import { quizzesData } from '../Quizes/Categories';
import Loader from '../Components/Loader';

const Categories = () => {
    
  const [loading, setLoading] = useState(true);
  const [categoryId, setCatagoryId] = useState(null);
  const [animate, setAnimate] = useState(false); // New state for animation
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[loading])
  // Function to handle quiz category selection
  const handleCategorySelect = (id) => {
    setAnimate(true); // Start animation
    setTimeout(() => {
      setCatagoryId(id); // Set category ID after animation completes
    }, 300); // Adjust this duration to match your CSS animation duration
  };

  return (
    <section>
      {
        loading ? <Loader loading={loading}/> :
        <div
          className={`flex flex-col space-y-7 justify-center items-center h-screen transition-all duration-300 ${animate ? 'opacity-0 transform translate-y-10' : 'opacity-100'}`}
        >
          <h1 className='text-3xl md:text-5xl font-extrabold text-neutral-700 animate-slideIn'>Select Your Quiz</h1>
          {QuizCategories.map((category) => {
            return (
              <div key={category.id} className='w-2/4 lg:w-2/5 flex justify-center animate-slideup'>
                <Link 
                  to={`/select-quiz/${category.id}`}
                  onClick={() => handleCategorySelect(category.id)}
                  className='text-neutral-700 font-bold text-lg md:text-xl border border-neutral-700 w-full text-center py-1 px-3 rounded-full hover:bg-neutral-700 hover:text-white transition-all ease-in-out duration-300'
                >
                  {category.name}
                </Link>
              </div>
            );
          })}
        </div>
      }
    </section>
  );
}

export default Categories;
