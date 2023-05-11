import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Moviecard = (curElem) => {

  const {id, title,type, synopsis} = curElem.jawSummary;
    
  return (
    <>
        <div className='p-4'>
          <div className='flex justify-center'>
          <Image src={curElem.jawSummary.backgroundImage.url} height={150} width={200}/>
          </div>
          <h1 className='text-xl text-center font-bold font-serif pt-2 pl-4'>{title}</h1>
          <p className='font-semibold font-serif ml-6 pb-2'>{synopsis}</p>
          <button className='bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 ml-4  px-4 py-2'><Link href={`movie/${id}`}>Read more</Link> </button>
        </div>
    </>
  )
}

export default Moviecard
