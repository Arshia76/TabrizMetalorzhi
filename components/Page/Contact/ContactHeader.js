import Image from 'next/image';

const ContactHeader = () => {
  return (
    <div className='overflow-x-hidden relative mb-16'>
      <div className='relative w-screen h-[50vh]'>
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
   absolute top-1/2 left-1/2 w-full translate-x-[-50%] translate-y-[-50%]'
      >
        <h2 className='text-7xl text-gray-800 text-center mb-20 leading-normal'>
          تماس با ما
        </h2>
      </div>
    </div>
  );
};

export default ContactHeader;
