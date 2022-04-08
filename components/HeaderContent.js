import Image from 'next/image';
import Resource from '../public/Resource';

const HeaderContent = () => {
  return (
    <div className='overflow-hidden relative'>
      <div className='relative w-screen'>
        <video muted autoPlay loop className='h-full brightness-50 bg-cover'>
          <source
            src='https://s3-eu-west-1.amazonaws.com/debearings/de-video.mp4'
            type='video/mp4'
          />
          <source
            src='https://s3-eu-west-1.amazonaws.com/debearings/de-video.webm'
            type='video/webM'
          />
        </video>
      </div>
      <div
        className='flex flex-col justify-center items-center px-44
       absolute top-1/2 left-1/2 w-full translate-x-[-50%] translate-y-[-30%]'
      >
        <h2 className='text-2xl md:text-6xl text-white text-center mb-20 leading-normal'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم
          متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </h2>
        <p className='text-xl md:text-4xl text-white text-center leading-normal mb-24'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم
          متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <div className='p-6 w-full flex items-center rounded-lg  bg-white'>
          <Image
            src={Resource.Svg.SEARCH2}
            alt='search-icon'
            width={30}
            height={30}
          />
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
