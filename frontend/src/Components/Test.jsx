import React from 'react'

const Test = () => {
  return (
    <div>
        <div className='h-192 w-screen bg-Grey p-20 flex gap-20 justify-around items-center'>

            <div className='bg-secondary h-2/5 w-1/5 flex flex-col rounded-2xl justify-center items-center p-5 gap-2'>
                {/* box 1 */}
                <img src='/mobilePhoto.svg' alt="" className='h-20  '/>
                <h3 className='text-xl font-semibold'>Capture & Upload</h3>
                <p>Use your smartphone to capture Image of the area of content.</p>



            </div>

            <div className='bg-secondary h-2/5 w-1/5 flex flex-col rounded-2xl justify-center items-center p-5 gap-2'>
                {/* box 2 */}
                <img src='/AI.svg' alt="" className='h-20  '/>
                <h3 className='text-xl font-semibold'>Al-powered Scan</h3>
                <p>Our advanced algorithm quickly processes to identlfy potential risks</p>



            </div>
            <div className='bg-secondary h-2/5 w-1/5 flex flex-col rounded-2xl justify-center items-center p-5 gap-2'>
                {/* box 3 */}
                <img src='/Report.svg' alt="" className='h-20  '/> 
                <h3 className='text-xl font-semibold'>Receive Your Report</h3>
                <p>Get advanced inights & guidance . Encouraging professional consulation.</p>



            </div>


        </div>



    </div>
  )
}

export default Test