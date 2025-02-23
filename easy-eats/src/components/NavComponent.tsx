import React from 'react'

// ICONS
import { Menu } from "lucide-react";

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

        <div className='max-w-[1440px] mx-auto flex sm:hidden justify-between font-semibold items-center text-[#1A1A19] px-5 pt-5'>
          <Menu size={35}/>
          <img className='max-w-[35px]' src="https://imgproxy.attic.sh/unsafe/rs:fit:540:540:1:1/t:1:FF00FF:false:false/aHR0cHM6Ly9hdHRp/Yy5zaC9ia3A1a3p5/cGd3YXdlODFhaWts/Y3J6MzhpM2Rm.webp" alt="" />
        </div>
    </nav>
  )
}

export default NavComponent
