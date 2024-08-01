import React from 'react'
import NavButton from './NavButton'

function Header() {
  return (
   <div className='top-0 m-0 w-full h-20 bg-gray-600 flex justify-start p-3' >
    < NavButton title="favourites" route="/Favourites" />
    < NavButton title="wish list"route='/WishList'/>
    < NavButton title="my library" route='Library'/>
    
   </div>
  )
}

export default Header