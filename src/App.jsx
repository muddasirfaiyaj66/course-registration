
import './App.css'
import Cards from './Components/Cards/Cards'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import CourseNames from './Components/Cards/Cart/CourseNames';
import CreditHour from './Components/Cards/Cart/CreditHour';
import TotalCreditHour from './Components/Cards/Cart/TotalCreditHour';
import TotalPrice from './Components/Cards/Cart/TotalPrice';

function App() {
  const [selectData, setSelectData] =useState([]);

  const handleClick = (card) =>{
    const newSelectedData =[...selectData,card];
    setSelectData(newSelectedData);
    
    
    const isExist =selectData.find((data) => data.id === card.id);
    if(isExist){
      toast('You have already select this course. ') 
    }
  }

  return ( 
    <>
      <div className='max-w-screen-xl mx-auto mt-10'>
        <h1 className='text-4xl font-bold text-center'>Course Registration</h1>

        <div className='flex gap-5 justify-between p-5'>
          <Cards handleClick={handleClick} ></Cards>
          <div className="card h-max w-full bg-gray-200 ">
          <div  className="card-body items-center text-center ">
            <CreditHour ></CreditHour>
            <CourseNames selectData={selectData}></CourseNames>
            <TotalCreditHour selectData={selectData}></TotalCreditHour>
            <TotalPrice></TotalPrice>

            </div>
            </div>
          
        </div>
        <ToastContainer/>
      </div>
    
      
     
      
      
    </>
  )
}

export default App
