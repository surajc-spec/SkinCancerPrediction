import React from 'react'

const Footor = () => {
  return (
    <div className='w-screen bg-textColor flex text-white pb-10 pt-10'>
        <div className='text-white p-5 w-1/2'>
            {/* left div ul */}


            <ul className='flex gap-4 pl-10 '>

                <li>About</li>
                <li>Privacy Policy</li>
                <li>Terms of service</li>
                <li>Blog</li>
            </ul>

        </div>

        <div className='w-1/2 '>
            {/* right div logos */}

            <div className='flex gap-5 p-4 justify-center items-center'>
                {/* upper logos div */}

       <a  href="https://www.instagram.com/iam_surajsc" target="_blank"  rel="noopener noreferrer">
  <img src="/Instagram.svg" alt="Instagram" className="h-10" />
        </a>
       <a  href="https://www.facebook.com/" target="_blank"  rel="noopener noreferrer">
  <img src="/FaceBook.svg" alt="Instagram" className="h-10" />
        </a>
       <a  href="https://www.x.com/iam_surajsc" target="_blank"  rel="noopener noreferrer">
  <img src="/Twitter.svg" alt="Instagram" className="h-10" />
        </a>
                 

            </div>

            <div className='flex justify-center items-center'>

           copyright  &copy; 2025 Suraj Chougule . All rights reseeved


            </div>

        </div>


    </div>
  )
}

export default Footor