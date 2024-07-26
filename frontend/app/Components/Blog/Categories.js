import React from 'react'
import Category from './Category'

const Categories = () => {
  return (
    <div className='w-[30vw]'>
        <h5 className='text-gray-700 text-lg font-semibold mb-5'>Categories</h5>
        <div className='flex flex-row gap-4 flex-wrap'>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
        </div>
    </div>
  )
}

export default Categories