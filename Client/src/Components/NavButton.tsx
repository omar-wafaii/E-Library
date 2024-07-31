import React from 'react'

type NavButtonProps = {
    title: string;
    route: string;
  }

function NavButton({title , route} : NavButtonProps) {
  return (
    <button className='w-20 bg-white h-8 m-2 rounded-lg'>{title}</button>
  )
}

export default NavButton