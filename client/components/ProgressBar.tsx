import React from 'react'

const ProgressBar = () => {
  return (
    <div className={`w-full p-5`}>
        <div className='flex justify-between items-center mb-2'>
            <span className='text-sm font-medium text-gray-700'>Question Current of Total</span>
            <span className='text-sm font-medium text-gray-700'>Percentage</span>
        </div>
        {/* progrssbar */}
        <div className='w-full bg-gray-200 rounded-full h-3 overflow-hidden'>
            <div className='bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-500 ease-in-out shadow-sm'></div>
        </div>
    </div>
  )
}

export default ProgressBar