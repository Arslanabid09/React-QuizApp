import React, { useState,useEffect } from 'react';
import Quize from './pages/Quize';
import Loader from './Components/Loader';
import { Route, Routes } from 'react-router-dom';
import Categories from './pages/Categories';
import Selected from './pages/Selected';
import { useQuize } from './Context/QuizContext';
import NotFound from './pages/404';
import Result from './pages/Result';

function App() {
  const [loading,setloading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setloading(false)
    }, 2100);
  },[])
  return (
    <>
    {
      loading  ? <Loader loading={loading}/> :
      <Routes>
        <Route path='/' element={<Quize/>}/>
        <Route path='/select-quiz' element={<Categories/>}/>
        <Route path='/select-quiz/:category' element={<Selected/>}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/Result' element={<Result/>}/>
      </Routes>
    }
    
    </>
  )
}

export default App
