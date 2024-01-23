import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <div className="container_s mb-[100px]" id='contacts'>
        <div className="text-center mb-8">
        <h4 className="text-gray-400">Get In Touch</h4>
        <h1 className="text-[32px] font-[600]">Contact Me</h1>
      </div>
      <div className='flex justify-between space-x-4 mx-auto w-[630px] text-center border px-6 py-3 rounded-[10px] sm:block sm:w-[100%]'>
        <Link to={'1999riddik@gmail.com'} className='flex items-center space-x-2 sm:mx-auto'>
        <Icon icon="logos:google-gmail" />
        <p>1999riddik@gmail.com</p>
        </Link>
        <Link to={'https://t.me/Akhror_572'} target='_blank' className='flex items-center space-x-2 sm:mx-auto'>
        <Icon icon="logos:telegram"  className='w-[25px] h-[25px] ' />
        <p>@Akhror_572</p>
        </Link>
        <Link to={'+998 97 258 77 66'} className='flex items-center space-x-2 sm:mx-auto'>
        <Icon icon="flat-color-icons:callback"  className='w-[25px] h-[25px] ' />
        <p>+998 97 258 77 66</p>
        </Link>
      </div>
    </div>
  )
}

export default Contacts