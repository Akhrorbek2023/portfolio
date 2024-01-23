import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GroupIcon from '@mui/icons-material/Group';



const About = () => {
  return (
    <div className="container_s mb-[100px]" id='about'>
      <div className="text-center mb-8">
        <h4 className="text-gray-400">Get To Know More</h4>
        <h1 className="text-[32px] font-[600]">About Me</h1>
      </div>
      <div className='flex justify-between space-x-[30px] items-end sm:block sm:space-x-0'>
        <div>
          <div>
            <img
              className='object-contain w-[350px] h-[400px] bg-black rounded-[15px] sm:mb-4 sm:w-[100%] sm:h-[350px]'
              src='https://cdn.pixabay.com/photo/2012/04/01/18/02/golf-23794_1280.png'
              alt="Avatar"
            />
          </div>
        </div>
        <div className='w-[68%] px-8 sm:w-[100%] sm:px-0'>
          <div className="flex justify-between space-x-4 mb-8 sm:block sm:space-x-0 sm:space-y-4">
            <div className="border-2 border-blue-500 rounded-[15px] w-[350px]  text-center py-8 sm:w-[100%]">
              <WorkspacePremiumIcon fontSize='large' color='primary' />
              <h1 className='text-[22px] font-[400] font_mochiy'>Experience</h1>
              <p className='text-gray-500 font-[500]'>2+ months</p>
              <p className='text-gray-500 font-[500]'>Frontend Development</p>
            </div>
            <div className="border-2 border-blue-500 rounded-[15px] w-[350px]  text-center py-8 sm:w-[100%]">
              <GroupIcon fontSize='large' color='primary' />
              <h1 className='text-[22px] font-[400] font_mochiy'>Education</h1>
              <p className='text-gray-500 font-[500]'>Bacholar Degree</p>
              <p className='text-gray-500 font-[500]'>N.T Frontend Sertificate</p>
            </div>
          </div>
          <p className='text-gray-400'>
            I entered programming through the frontend direction. I studied programming at Najot Education IT Academy and received a certificate of successful completion. Apart from frontend direction, I also know about Backend lighting. I have developed several Telegram bots.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About