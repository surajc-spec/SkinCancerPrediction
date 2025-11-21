import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='h-1/5 w-screen bg-primary text-3xl border-black text-textColor font-roboto flex justify-between p-6'>
        <div >
            DermaScan AI
        </div>

        <div>
          <ul className='flex font-sans text-xl gap-7 justify-center items-center rounded-lg'>
                 
                <li>How it works</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>FAQs</li>
                <li>
  <Link to="/predict">
    <button className="bg-accent p-2 rounded text-white">Get Started</button>
  </Link>
</li>
            </ul>
            
           

        </div>



    </div>
  )
}

export default Header