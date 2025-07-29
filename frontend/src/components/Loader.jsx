import React from 'react'
import xyz from "../components/main.png"
const Loader = () => {
  return (
    <div className='w-full h-full'>
       <div className='flex justify-center items-center'>
            <img src={xyz} alt='nope' />
       </div>
    </div>
  )
}

export default Loader
