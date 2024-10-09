import React from 'react'

const Red = ({no}) => {
  return (
    <div className='w-44 border-4 border-red-600 h-24 flex justify-center items-center font-mono rounded-md text-red-600'>
    {no === 0 ? 'Ground Floor' : `Floor ${no}`}
  </div>
  )
}

export default Red