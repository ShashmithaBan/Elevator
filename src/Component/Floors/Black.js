import React from 'react';

const Black = ({ no }) => {
  return (
    <div className='w-44 border-2 border-black h-24 flex justify-center items-center font-mono rounded-md'>
      {no === 0 ? 'Ground Floor' : `Floor ${no}`}
    </div>
  );
};

export default Black;