import React from 'react'

type NavButtonProps = {
    title: string;
    route: string;
  }

function NavButton({title , route} : NavButtonProps) {
  return (
    <button className=' m-2 hover:bg-blue-500 hover:text-white w-24 text-blue-500 border-2 bg-transparent p-2 rounded-l-2xl rounded-r-2xl border-blue-500'>{title}</button>
  )
}

export default NavButton