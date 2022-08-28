import { useContext } from 'react';
import { EnqueryContext } from '../components/Layout';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { FaFax } from 'react-icons/fa';

const ContactForm = () => {
  const context = useContext(EnqueryContext);
  return (
    <div
      ref={context.ref}
      className='bg-[#FBFBFBd] my-10 pb-10 w-[90%] mx-auto px-4 md:px-20 shadow-md'
    >
      <div className='flex flex-col mb-10 '>
        <div className='flex items-start mt-10'>
          <GoLocation size={22} color='#000' />
          <span className='text-3xl leading-normal text-[#000] mr-2'>
            تبریز-کیلومتر 20 جاده قدیم تهران- روبروی کاشی تبریز-کوی متالورژی
          </span>
        </div>
        <div className='flex items-center mt-10'>
          <HiOutlineMail size={22} color='#000' />
          <span className='text-3xl text-[#000] mr-2'>info@tabrizpm.ir</span>
        </div>
        <div className='flex items-center mt-10'>
          <FiPhone size={22} color='#000' />
          <span className='text-3xl text-[#000] mr-2'>04136306035-6</span>
        </div>
        <div className='flex items-center mt-10'>
          <FaFax size={22} color='#000' />
          <span className='text-3xl text-[#000] mr-2'>36306107</span>
        </div>
      </div>
      <div className='flex flex-wrap items-start justify-around  pt-10'>
        <div className='flex flex-wrap justify-between items-center w-full'>
          <input
            type='text'
            className=' mx-1 mb-6 px-4 py-6 text-xl md:text-3xl rounded-lg
          bg-gray-100 text-gray-800 placeholder:text-[#999999]'
            placeholder='نام*'
            style={{ border: 'none !important', outline: 'none' }}
          />
          <input
            type='text'
            className=' mx-1 mb-6 px-4 py-6 text-xl md:text-3xl bg-gray-100
           text-gray-800 placeholder:text-[#999999] rounded-lg'
            placeholder='موضوع*'
            style={{ border: 'none !important', outline: 'none' }}
          />
          <input
            type='email'
            className=' mx-1 mb-6 px-4 py-6 text-xl md:text-3xl bg-gray-100 text-gray-800 
          placeholder:text-[#999999] rounded-lg'
            placeholder='ایمیل'
            style={{ border: 'none !important', outline: 'none' }}
          />
          <input
            type='number'
            className=' mx-1 mb-6 px-4 py-6  text-xl md:text-3xl bg-gray-100 text-gray-800
           placeholder:text-[#999999] rounded-lg'
            placeholder='شماره موبایل'
            style={{ border: 'none !important', outline: 'none' }}
          />
        </div>
        <textarea
          className='w-full mt-8  bg-gray-100 resize-none  text-xl md:text-3xl px-4 py-2 
          rounded-lg'
          cols='30'
          rows='10'
          placeholder='متن پیام'
          style={{ border: 'none !important', outline: 'none' }}
        ></textarea>
      </div>
      <div className='flex justify-center items-center w-full'>
        <button
          className='text-2xl md:text-4xl mt-10 text-gray-100 bg-[#F1B444] px-4 py-6
          rounded-md w-96'
        >
          ارسال پیام
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
