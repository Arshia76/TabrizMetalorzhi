import Image from 'next/image';
import Resource from '../../public/Resource';

const CatalogueCard = () => {
  return (
    <div
      className='shadow-2xl rounded-2xl bg-white cursor-pointer
    overflow-hidden w-1/3 mx-10'
    >
      <div className='px-12 py-10 flex flex-col items-center justify-center'>
        <Image
          src={Resource.Images.BG}
          alt='product'
          width={200}
          height={150}
          objectFit='cover'
        />
        <span className='text-3xl text-black ml-auto mt-10'>نام کالا</span>
      </div>

      <button
        className='bg-[#EEAA43] text-3xl w-full rounded-b-2xl
     text-white p-4 py-6 duration-500 transition-all hover:opacity-90'
      >
        مشاهده
      </button>
    </div>
  );
};

export default CatalogueCard;
