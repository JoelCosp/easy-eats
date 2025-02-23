import React from 'react'

const HeroComponent = () => {
  return (
    <>
        <section>
            <div className='max-w-[1440px] mx-auto font-semibold items-center text-[#1A1A19] px-5'>
                
                <div className='hidden md:grid md:grid-cols-2'>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-[#BC282D] text-2xl font-bold py-4'>"EAT WELL, FEEL GREAT</h2>
                        <h1 className='font-bold text-6xl py-4'>Eat healthy with a new <br /> recipe every day</h1>
                        <p className='text-xl py-4'>¡Discover tasty, nutritious meals to keep your days fresh and flavorful!</p>
                        <div className='py-4'>
                            <button className='bg-[#1A1A19] text-white font-bold px-[50px] py-5 rounded-full text-xl hover:cursor-pointer shadow-[0px_29px_47.7px_rgba(0,0,0,0.15)]'>Get Started</button>
                            <button className='font-bold px-[50px] py-5 rounded-full ml-5 text-xl hover:cursor-pointer'>Explore →</button>
                        </div>
                    </div>
                    <div className='justify-end hidden md:flex'>
                        <img src="src/assets/heroPlate.png" alt="Delicious meal" />
                    </div>
                </div>

                <div className='bg-[#1A1A19] max-h-[167px] sm:hidden overflow-hidden flex justify-between my-5 rounded-2xl'>
                    <div className='p-5 flex flex-col justify-between'>
                        <h1 className='text-white font-bold text-xl'>¡Healthy eat <br /> every day with us!</h1>
                        {/* <p className='text-white'>Discover tasty meals to <br /> keep your days fresh</p> */}
                        <button className='bg-white rounded-full py-2 text-lg'>Get Started</button>
                    </div>
                    <img className='max-h-[170px] me-[-65px]' src="src/assets/heroPlate.png" alt="Delicious meal" />
                </div>
            </div>
        </section>
        
        
    </>
  )
}

export default HeroComponent
