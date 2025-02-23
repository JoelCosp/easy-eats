import React from 'react'

const NavComponent = () => {
  return (
    <nav>
        <div className='max-w-[1440px] mx-auto hidden sm:flex justify-between font-semibold items-center text-[#1A1A19] px-5'>
            <img className='max-w-[40px] max-h-[40px]' src="https://static.vecteezy.com/system/resources/previews/055/364/381/non_2x/bowl-with-food-icon-isolated-free-png.png" alt="" />
            <ul className='flex'>
                <li className='px-2 py-6 border-b-2 border-transparent hover:border-[#1A1A19] hover: cursor-pointer'>HOME</li>
                <li className='px-2 py-6 border-b-2 border-transparent hover:border-[#1A1A19] hover: cursor-pointer'>DAILY RECIPE</li>
                <li className='px-2 py-6 border-b-2 border-transparent hover:border-[#1A1A19] hover: cursor-pointer'>CATALOG</li>
                <li className='px-2 py-6 border-b-2 border-transparent hover:border-[#1A1A19] hover: cursor-pointer'>MY RECIPES</li>
                <li className='px-2 py-6 border-b-2 border-transparent hover:border-[#1A1A19] hover: cursor-pointer'>CALENDAR</li>
            </ul>
            <img className='max-w-[40px] max-h-[40px]' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
        </div>
    </nav>
  )
}

export default NavComponent
