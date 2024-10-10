import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import QuizCategories from '../Quizes/Categories'
import JSQuiz from './JSQuiz'
import ReactQ from './ReactQ'
import HtmlQ from './HtmlQ'
import Loader from '../Components/Loader'


const Selected = () => {
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  },[loading])
    const params = useParams();
    const Id = QuizCategories.find((item)=>item.id == params.category) 
    // console.log(Id.id);
       
  return (
    <div>
       {loading? <Loader loading={loading}/> 
      :
      <div>
         {Id.id == 1 && <HtmlQ/>}
        {Id.id == 2 && <JSQuiz/>}
        {Id.id == 3 && <ReactQ/>}
      </div> 
      }
    </div>
  )
}

export default Selected