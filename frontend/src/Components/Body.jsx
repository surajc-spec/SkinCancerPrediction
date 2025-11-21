import React from 'react'
import { Link } from 'react-router-dom';
const Body = () => {
  return (
    <div className='bg-secondary'>
       <div className='bg-secondary  flex  '>

      
         <div className ='w-1/2 h-96 flex justify-center items-start flex-col gap-3 pt-10 pl-20'>

           {/* text div left side */}

       <p className='text-5xl text-textColor'>Your Skin's Future,</p>
       <p className='text-5xl text-textColor'>Precicted with Confidence</p>
       <p className='text-xl'>Leveraging advanced Al for early skin cancer detection, right from device.</p>
        <Link to="/predict">
    <button className="bg-accent p-2 rounded text-white">Get Started</button>
  </Link>
        </div>

        
        <div className='w-1/2 bg-secondary flex justify-center items-center'>
            {/* img Div Right side */}
     <img src="/doctor.svg" alt="Skin Cancer Detection" className="  h-3/4 " />

        </div>
       </div>


    </div>
  )
}

export default Body