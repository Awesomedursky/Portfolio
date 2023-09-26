import {BsLinkedin, BsTwitter, BsGit} from 'react-icons/bs'
const SocialMediaIcons = () => {

  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a className='hover:opacity-50 transition duration-500' href='https://www.linkedin.com/in/ayodeji-ayodele-a5302023a/' target='_blank' rel='noreferrer'>
        <BsLinkedin size={30} />
      </a>
      <a className='hover:opacity-50 transition duration-500' href='https://twitter.com/_Ayodejii' target='_blank' rel='noreferrer'>
        <BsTwitter size={30} />
      </a>
      <a className='hover:opacity-50 transition duration-500' href='https://github.com/Awesomedursky' target='_blank' rel='noreferrer'>
        <BsGit size={30} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
