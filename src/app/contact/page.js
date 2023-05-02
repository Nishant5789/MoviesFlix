import React from 'react'
import Contactform from '../components/Contactform'

const page = () => {
  return (
    <>
      <div className='flex justify-center p-4 items-center '>
        <div className='w-96'>
        <h1 className='text-4xl my-5 text-center'>contact us</h1>
          <Contactform />
        </div>
      </div>
    </>
  )
}

export default page
