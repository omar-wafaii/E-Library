import React from 'react'
import { Book } from '../services/google/fetch'

function BookCard({bookGrid}:{bookGrid : Book}) {
    
  return (
    <div className='p-2 m-4 w-52 h-96 bg-gray-600 rounded-xl flex items-center flex-col relative'>
            <img className="w-40 h-56 rounded-lg" src={bookGrid.thumbnail}/>
            <span className='text-justify'>{bookGrid.title}</span>
            <button className='hover:bg-blue-500 hover:text-white w-24 bottom-0 absolute mb-4 text-blue-500 border-2 bg-transparent p-2 rounded-l-2xl rounded-r-2xl border-blue-500'  >Details</button>
        

    </div>
  )
}

export default BookCard