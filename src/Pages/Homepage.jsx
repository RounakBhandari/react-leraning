import React from 'react'
import { NavbarFinal } from '../Components/Navbar';
import { ProfileCard } from '../Components/ProfileCard';

 const Homepage = () => {
  return (
    <div className='bg-neutral-light'>
      <div className='p-5'>
      <NavbarFinal/>
       </div>

       {/* Main Section */}

       <div className='flex flex-cols-2 p-3 items-center justify-evenly'>
        <div>
        <ProfileCard/>
        </div>
        <div>
          Under Construction
        </div>
       </div>
    </div>
  )
}

export default Homepage;