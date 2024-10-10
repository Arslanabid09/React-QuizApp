import React from 'react';
import { Link } from 'react-router-dom';
import blub from '../assets/blub.png'

const Quize = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center  gap-y-10">
      <div className='text-center space-y-4'>
        <h1 className="text-5xl flex md:text-6xl text-neutral-700 font-extrabold animate-slideIn">Qu<img src={`.${blub}`} className='w-12 h-12 mt-3 animate-bounce'/>z App</h1>
        <h2 className="text-2xl md:text-4xl text-neutral-700 font-extrabold animate-slideIn">Challenge Your Mind!</h2>
      </div>
      <Link to={'/select-quiz'} className="text-white bg-neutral-700 px-10 py-2 text-xl font-bold transition-all ease-in-out duration-300 hover:bg-neutral-800  hover:scale-125 animate-slideup  hover:rotate-12 rounded-full">
        Start
      </Link>
    </section>
  );
}

export default Quize;
