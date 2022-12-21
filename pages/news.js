import Image from 'next/image';

const NewsPage = () => {
  return (
    <div className='relative min-h-screen overflow-x-hidden'>
      <div className='relative w-screen h-[100vh]'>
        <Image
          src={
            'https://debearings.com/wp-content/themes/d_och_e/assets/images/debearings-pattern-2.png'
          }
          alt='bg-img'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div
        className='flex flex-col justify-center items-center px-6 md:px-44
        absolute top-1/2 left-1/2 w-full translate-x-[-50%] translate-y-[-30%] 
        text-3xl md:text-7xl leading-normal md:leading-normal text-justify font-light'
      >
        در دست توسعه
      </div>
    </div>
  );
};

export default NewsPage;
