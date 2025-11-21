import React from 'react'

const Trust = () => {
  return (
    <div className='flex'>
        <div className='bg-tertiory p-20 flex flex-col gap-5 w-1/2 h-96 justify-center items-start  ' >

            {/* Left div text */}
    <div className='flex flex-col gap-2'>

        {/* first div */}
          <h1 className='text-textColor text-5xl'>Why to trust us ?</h1>  
      <h1 className='text-textColor text-4xl'>Your Health, Our Priority</h1>   
      <p className='text-textColor text-xl'>Accuracy, Speed, and Peace Skin </p>

    </div  >



    <div className='text-textColor '>
    {/* second div */}
    <ul className='list-disc'>
        <li>Expert-Trained Al</li>
        <li>Confidential & Secure</li>
        <li>Early Detection Focus</li>
    </ul>
    </div>


    <div className='flex flex-col gap-2'>
        {/* Third div */}
        <p className='text-textColor text-xl'>"Thanks to this AI scan, I got an early diagnosis and started treatment right away — a real lifesaver!"</p>
      <p className='text-textColor '>~Anna L Sattle</p>
    </div>


    </div>
    <div className='bg-tertiory p-8 flex flex-col gap-2 w-1/2 h-96 justify-center' >
      <img src="/DoctorNurse.svg" alt="" className='h-full'/>


    </div>



    </div>
  )
}

export default Trust