import React from 'react'
import Black from './Floors/Black'
import Green from './Floors/Green'
import Red from './Floors/Red'
import { HiArrowSmDown } from "react-icons/hi";
import { HiArrowSmUp } from "react-icons/hi";


const Layout = () => {
  const btnVisible = true;
  const upDownBtnHandler = () =>{
   
  }
  return (
    <>
    <section className='flex justify-center m-10 space-x-10'>
    <div className="space-y-5 flex-row items-center">
       <Black no ={5}/>
       <Black no ={4}/>
       <Black no ={3}/>
       <Black no ={2}/>
       <Black no ={1}/> 
    </div>
    <div className='flex items-center'>
      {btnVisible ? <div className='space-x-5'>
        <button onClick={upDownBtnHandler} className='border-2 border-black hover:border-green-500 hover:bg-green-100 transition-all duration-300 active:bg-green-300'>
<HiArrowSmUp className='text-8xl hover:text-green-500 transition-all duration-300' />
        </button>
        <button onClick={upDownBtnHandler} className='border-2 border-black hover:border-green-500 hover:bg-green-100 transition-all duration-300 active:bg-green-300'>
<HiArrowSmDown className='text-8xl hover:text-green-500 transition-all duration-300' />
        </button>
        </div> : <div className=' border-black border-2 p-5 flex-row space-y-2'>
          <div className='flex'>
          <button className='w-20 h-16 border-2 border-black hover:border-blue-500 hover:bg-blue-100 transition-all duration-300 active:bg-blue-300 mx-1'>
            1
          </button>
          <button className='w-20 h-16 border-2 border-black hover:border-blue-500 hover:bg-blue-100 transition-all duration-300 active:bg-blue-300 mx-1'>
            2
          </button>
          </div>
          <div>
<button className='w-20 h-16 border-2 border-black hover:border-blue-500 hover:bg-blue-100 transition-all duration-300 active:bg-blue-300 mx-1'>
            3
          </button>
          <button className='w-20 h-16 border-2 border-black hover:border-blue-500 hover:bg-blue-100 transition-all duration-300 active:bg-blue-300 mx-1'>
            4
          </button>
          </div>
          <div>
          <button className='w-20 h-16 border-2 border-black hover:border-blue-500 hover:bg-blue-100 transition-all duration-300 active:bg-blue-300 mx-1'>
            5
          </button>
          <button className='w-20 h-16 border-2 border-black hover:border-blue-500 hover:bg-blue-100 transition-all duration-300 active:bg-blue-300 mx-1'>
            6
          </button>
          </div>
          
          </div>}
    </div>
    </section>
   
    </>
  )
}

export default Layout