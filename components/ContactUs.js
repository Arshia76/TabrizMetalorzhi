import Image from 'next/image';
import Resource from '../public/Resource';

const ContactUs = () => {
  return (
    <div>
      <div className='w-full flex items-center justify-center'>
        <span className='text-[#D2D2D2]  text-8xl'>
          .....................................................................
        </span>
      </div>
      <div
        className='flex flex-col md:flex-row flex-wrap md:flex-nowrap md:justify-around 
      items-center mt-10'
      >
        <div className='flex items-center mb-12 md:mb-0'>
          <div
            className=' relative flex items-center justify-center w-[80px] h-[80px]
          rounded-full p-6 ml-6'
          >
            <Image
              layout='fill'
              objectFit='contain'
              src={Resource.Svg.SEARCH2}
              alt='email'
            />
          </div>
          <div className='flex flex-col'>
            <span className='text-[#999999] text-xl md:text-4xl mb-6'>
              ایمیل
            </span>
            <span className='text-gray-800 text-2xl md:text-5xl'>
              arshia@yahoo.com
            </span>
          </div>
        </div>
        <div className='flex items-center'>
          <div
            className='relative flex items-center justify-center w-[80px] h-[80px]
          rounded-full p-6 ml-6'
          >
            <Image
              layout='fill'
              objectFit='contain'
              src={Resource.Svg.SEARCH2}
              alt='phone'
            />
          </div>

          <div className='flex flex-col'>
            <span className='text-[#999999] text-xl md:text-4xl mb-6'>
              شماره تماس
            </span>
            <span className='text-gray-800 text-2xl md:text-5xl'>
              041-36654875
            </span>
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-center'>
        <span className='text-[#D2D2D2]  text-8xl'>
          .....................................................................
        </span>
      </div>
    </div>
  );
};

export default ContactUs;
