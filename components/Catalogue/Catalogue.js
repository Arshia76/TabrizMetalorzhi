import Image from 'next/image';

const Catalogue = () => {
  return (
    <div className='overflow-hidden relative mb-16'>
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
        className='flex flex-col justify-center items-center px-8 md:px-44
   absolute top-1/2 left-1/2 w-full translate-x-[-50%] translate-y-[-30%]'
      >
        <h2 className='text-4xl md:text-7xl text-gray-800 text-center mb-20 leading-normal'>
          کاتالوگ‌ها
        </h2>
        <p className='text-3xl leading-normal text-justify md:leading-normal text-gray-700 md:text-5xl'>
          در این قسمت می‌توانید کاتالوگ‌های شرکت را در مرورگر خود مشاهده کنید یا
          اینکه به صورت pdf دانلود کنید و در صورت نیاز به صورت نسخه چاپی سفارش
          دهید
        </p>
      </div>
    </div>
  );
};

export default Catalogue;
