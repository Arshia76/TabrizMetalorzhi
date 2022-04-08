const ContactForm = () => {
  return (
    <div className='bg-[#FBFBFBd] mb-10 shadow-md'>
      <h2
        className='text-3xl md:text-5xl px-4 py-10
      rounded-t-lg bg-[#F1B444] text-white'
      >
        چطور می‌توانیم کمکتان کنیم؟
      </h2>
      <div className='grid grid-cols-2 gap-x-24 gap-y-16 px-10 pt-10'>
        <input
          type='text'
          className='px-4 py-6 shadow-sm text-xl md:text-3xl rounded-lg
          bg-white text-gray-800 placeholder:text-[#999999]'
          placeholder='نام*'
        />
        <input
          type='text'
          className='px-4 py-6 shadow-sm text-xl md:text-3xl bg-white
           text-gray-800 placeholder:text-[#999999] rounded-lg'
          placeholder='موضوع*'
        />
        <input
          type='email'
          className='px-4 py-6 shadow-sm text-xl md:text-3xl bg-white text-gray-800 
          placeholder:text-[#999999] rounded-lg'
          placeholder='ایمیل'
        />
        <input
          type='phone'
          className='px-4 py-6 shadow-sm text-xl md:text-3xl bg-white text-gray-800
           placeholder:text-[#999999] rounded-lg'
          placeholder='شماره موبایل'
        />
        <textarea
          className='resize-none shadow-sm text-xl md:text-3xl px-4 py-2 col-span-2 
          rounded-lg'
          cols='30'
          rows='10'
          placeholder='متن پیام'
        ></textarea>
      </div>
      <div className='flex justify-center items-center w-full px-10 pb-20'>
        <button
          className='text-2xl md:text-4xl text-white bg-[#F1B444] px-4 py-6
          rounded-md w-full'
        >
          ارسال پیام
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
