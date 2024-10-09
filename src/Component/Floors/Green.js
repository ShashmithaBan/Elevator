import React from 'react'

const Green = ({no}) => {
  return (
    <div className='w-44 border-4 border-green-700 h-24 flex justify-center items-center font-mono rounded-md text-green-600'>
    {no === 0 ? 'Ground Floor' : `Floor ${no}`}
  </div>
  )
}

export default Green