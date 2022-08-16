import ContactForm from './ContactForm';
import ContactUs from './ContactUs';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Resource from '../public/Resource';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { FaFax } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import Image from 'next/image';

const DynamicMap = dynamic(() => import('../components/Map'), {
  ssr: false,
});

const Footer = () => {
  const router = useRouter();

  return (
    <footer className='w-full h-full'>
      {/* <div className='px-8 md:px-40'>
        {router.asPath === Resource.Routes.CONTACT && <ContactForm />}
        <ContactUs />
      </div> */}
      {/* <div className='w-full mt-10'>
        <DynamicMap />
      </div> */}
      <div className='flex flex-col md:flex-row justify-around items-start px-16 py-20 bg-[#333]'>
        <div className='flex flex-col mb-10 md:mb-0 '>
          <h2 className='text-5xl text-[#ccc] font-semibold mb-4'>
            دفتر مرکزی
          </h2>
          <div className='flex items-center mt-10'>
            <GoLocation size={22} color='#ccc' />
            <span className='text-3xl text-[#ccc] mr-2 w-[250px]'>
              تبریز-کیلومتر 20 جاده قدیم تهران- روبروی کاشی تبریز-کوی متالورژی
            </span>
          </div>
          <div className='flex items-center mt-10'>
            <HiOutlineMail size={22} color='#ccc' />
            <span className='text-3xl text-[#ccc] mr-2'>info@tabrizpm.ir</span>
          </div>
          <div className='flex items-center mt-10'>
            <FiPhone size={22} color='#ccc' />
            <span className='text-3xl text-[#ccc] mr-2'>04136306035-6</span>
          </div>
          <div className='flex items-center mt-10'>
            <FaFax size={22} color='#ccc' />
            <span className='text-3xl text-[#ccc] mr-2'>36306107</span>
          </div>
        </div>
        <div className='mx-22 mb-10 md:mb-0 '>
          <h2 className='text-5xl text-[#ccc] font-semibold mb-12'>
            گواهی‌نامه‌ها و نماد‌ها
          </h2>
          <div className='flex items-start justify-center'>
            <Image
              src={Resource.Images.NACI}
              width={100}
              height={100}
              alt='naci'
              objectFit='fill'
            />
            <Image
              src={
                'https://debearings.com/wp-content/uploads/2016/02/de_iso_9001.png'
              }
              width={100}
              height={80}
              alt='naci'
              objectFit='fill'
            />
            <Image
              width={100}
              height={80}
              alt='naci'
              objectFit='fill'
              src={
                'https://debearings.com/wp-content/uploads/2016/02/de_iso_14001.png'
              }
            />
          </div>
        </div>
        <div>
          <h2 className='text-5xl text-[#ccc] font-semibold mb-4'>
            دسترسی سریع
          </h2>
          <div className='flex flex-col'>
            <div className='flex items-center mt-6'>
              <BsDot size={16} color='#ccc' />
              <span
                className='text-3xl duration-300 ease-in transition-all hover:text-orange-400
              cursor-pointer text-[#ccc]'
              >
                خانه
              </span>
            </div>
            <div className='flex items-center mt-6'>
              <BsDot size={16} color='#ccc' />
              <span
                className='text-3xl duration-300 ease-in transition-all hover:text-orange-400
              cursor-pointer text-[#ccc]'
              >
                محصولات
              </span>
            </div>
            <div className='flex items-center mt-6'>
              <BsDot size={16} color='#ccc' />
              <span
                className='text-3xl duration-300 ease-in transition-all hover:text-orange-400
              cursor-pointer text-[#ccc]'
              >
                درباره‌ما
              </span>
            </div>
            <div className='flex items-center mt-6'>
              <BsDot size={16} color='#ccc' />
              <span
                className='text-3xl duration-300 ease-in transition-all hover:text-orange-400
              cursor-pointer text-[#ccc]'
              >
                تماس‌با‌ما
              </span>
            </div>
            <div className='flex items-center mt-6'>
              <BsDot size={16} color='#ccc' />
              <span
                className='text-3xl duration-300 ease-in transition-all hover:text-orange-400
              cursor-pointer text-[#ccc]'
              >
                کاتالوگ
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
