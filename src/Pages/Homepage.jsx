import React from 'react'
import { NavbarFinal } from '../Components/Navbar';
import { ProfileCard } from '../Components/ProfileCard';

  const Homepage = () => {
    return (
      <div className='bg-neutral-light min-h-screen'>
        <div className='p-5'>
        <NavbarFinal/>
        </div>

        {/* Main Section */}

        
          <div className='font-sans font-extrabold text-9xl scale-y-150 flex flex-row justify-center '>
            ROUNAK BHANDARI
          </div>
        
        </div>
    )
  }

export default Homepage;