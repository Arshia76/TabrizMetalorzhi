import Image from 'next/image';

const ProductsHero = (props) => {
  return (
    <div className='overflow-hidden relative mb-64'>
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
        className='flex flex-col justify-center items-center 
 absolute top-1/2 left-1/2 w-3/4 px-24  translate-x-[-35%] translate-y-[-30%]'
      >
        <h2 className='text-7xl text-gray-800 text-center mb-10 leading-normal'>
          محصولات ما
        </h2>
        <h4 className='text-5xl text-gray-800 text-center mb-10 leading-normal'>
          در زیر دسته‌بندی محصولات را مشاهده می‌کنید
        </h4>
      </div>
      <div className='absolute left-0 bottom-0'>
        <Image
          src={
            'https://debearings.com/wp-content/uploads/2016/03/glidlager_toppbild-2.png'
          }
          alt='Img'
          width={350}
          height={350}
        />
      </div>
    </div>
  );
};

export default ProductsHero;
