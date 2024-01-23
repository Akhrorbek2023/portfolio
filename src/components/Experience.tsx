import VerifiedIcon from '@mui/icons-material/Verified';

const Experience = () => {
  return (
    <div className="container_s mb-[100px]" id='experience'>
       <div className="text-center mb-8">
        <h4 className="text-gray-400">Explore My</h4>
        <h1 className="text-[32px] font-[600]">Experience</h1>
      </div>
      <div className='flex justify-center space-x-8 sm:block sm:space-x-0'>
     <div className='border-2 border-blue-500 rounded-[15px] px-20 py-8 w-[45%] sm:w-[100%] sm:mb-4 sm:px-10'>
      <h1 className='text-[28px] font-[500] text-gray-600 text-center mb-4'>
        Frontend
      </h1>
     <div className='grid grid-cols-2 gap-8 '>
        <div className='flex space-x-4 items-center'>
          <div>
            <VerifiedIcon color='primary'/>
          </div>
          <div>
            <h1 className='text-[20px] font-[500]'>HTML</h1>
            <p className='text-gray-500'>Experienced</p>
          </div>
        </div>
        <div className='flex space-x-4 items-center'>
          <div>
            <VerifiedIcon color='primary'/>
          </div>
          <div>
            <h1 className='text-[20px] font-[500]'>CSS</h1>
            <p className='text-gray-500'>Experienced</p>
          </div>
        </div>
        <div className='flex space-x-4 items-center'>
          <div>
            <VerifiedIcon color='primary'/>
          </div>
          <div>
            <h1 className='text-[20px] font-[500]'>Javascript</h1>
            <p className='text-gray-500'>Experienced</p>
          </div>
        </div>
        <div className='flex space-x-4 items-center'>
          <div>
            <VerifiedIcon color='primary'/>
          </div>
          <div>
            <h1 className='text-[20px] font-[500]'>Typescript</h1>
            <p className='text-gray-500'>Intermediate</p>
          </div>
        </div>
        <div className='flex space-x-4 items-center'>
          <div>
            <VerifiedIcon color='primary'/>
          </div>
          <div>
            <h1 className='text-[20px] font-[500]'>Redux</h1>
            <p className='text-gray-500'>Experienced</p>
          </div>
        </div>
        <div className='flex space-x-4 items-center'>
          <div>
            <VerifiedIcon color='primary'/>
          </div>
          <div>
            <h1 className='text-[20px] font-[500]'>React</h1>
            <p className='text-gray-500'>Experienced</p>
          </div>
        </div>
      </div>
     </div>
     <div className='border-2 border-blue-500 rounded-[15px] px-20 py-8 w-[45%] sm:w-[100%] sm:mb-4 sm:px-10'>
     <h1 className='text-[28px] font-[500] text-gray-600 text-center mb-4'>
        Backend
      </h1>
     <div className='grid grid-cols-2 gap-8 '>
        <div className='flex space-x-4 items-center'>
          <div>
            <VerifiedIcon color='primary'/>
          </div>
          <div>
            <h1 className='text-[20px] font-[500]'>PHP</h1>
            <p className='text-gray-500'>Intermediate</p>
          </div>
        </div>
        <div className='flex space-x-4 items-center'>
          <div>
            <VerifiedIcon color='primary'/>
          </div>
          <div>
            <h1 className='text-[20px] font-[500]'>MySQL</h1>
            <p className='text-gray-500'>Intermediate</p>
          </div>
        </div>
        <div className='flex space-x-4 items-center'>
          <div>
            <VerifiedIcon color='primary'/>
          </div>
          <div>
            <h1 className='text-[20px] font-[500]'>NodeJs</h1>
            <p className='text-gray-500'>Intermediate</p>
          </div>
        </div>
        <div className='flex space-x-4 items-center'>
          <div>
            <VerifiedIcon color='primary'/>
          </div>
          <div>
            <h1 className='text-[20px] font-[500]'>MongoDB</h1>
            <p className='text-gray-500'>Intermediate</p>
          </div>
        </div>
      </div>
     </div>
      </div>
    </div>
  )
}

export default Experience