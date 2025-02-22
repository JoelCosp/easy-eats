import React from 'react'
import NavLeftIcon from '../assets/nav/navLeftIcon.svg'

const NavComponent = () => {
  return (
    <nav>
        <div className='max-w-[1440px] mx-auto flex flex justify-center'>
            <img src={NavLeftIcon} alt="" />
            <ul className='flex'>
                <li>HOME</li>
                <li>DAILY RECIPE</li>
                <li>CATALOG</li>
                <li>MY RECIPES</li>
                <li>CALENDAR</li>
            </ul>
        </div>
    </nav>
  )
}

export default NavComponent
