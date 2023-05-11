import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Moviecard from '../components/Moviecard';

const page = async () => {
 
  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f39765d918mshb7ea0fa326fb0c4p14df92jsn8f2c13f74842',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const maindata = data.titles;

  console.log(maindata);
  return (
    <>
      <h1 className='text-center font-bold mt-5 font-serif text-3xl '>Series and Movie</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  p-5'>
      {
        maindata.map((curEle)=>{
          return <Moviecard key={curEle.id} {...curEle} />
        })
      }
      </div>
    </>
  )
}

export default page
