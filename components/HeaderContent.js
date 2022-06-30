import { BiSearch } from 'react-icons/bi';

const HeaderContent = () => {
  return (
    <div className='overflow-hidden relative'>
      <div className='relative w-screen h-[90vh] '>
        <video
          muted
          autoPlay
          loop
          controlsList='nodownload'
          className='h-full w-screen brightness-50 object-cover'
        >
          <source
            src={'/Resource/Videos/hero-video.mp4.crdownload'}
            type='video/mp4'
          />
        </video>
      </div>
      <div
        className='flex flex-col justify-center items-center px-8 md:px-44 max-w-screen-xl
       absolute top-1/2 left-1/2 w-full translate-x-[-50%] translate-y-[-50%]'
      >
        <h2 className='text-5xl md:text-6xl text-white text-center my-20 leading-normal'>
          کارخانه متالورژی پودر تبریز
        </h2>

        <div className='p-6 py-2 w-full flex items-center rounded-lg  bg-white'>
          <BiSearch size={55} color='grey' />
          <input
            type='text'
            className='w-full pr-6 text-3xl text-black'
            placeholder='دنبال چی هستین؟'
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
