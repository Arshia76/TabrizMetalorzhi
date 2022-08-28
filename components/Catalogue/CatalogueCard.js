import Image from 'next/image';
import Resource from '../../public/Resource';

const CatalogueCard = () => {
  return (
    <a
      href={'/Resource/Files/c001 (3 files merged)-merged.pdf'}
      download
      className='shadow-2xl rounded-2xl bg-white cursor-pointer
    overflow-hidden mx-auto'
    >
      <div className='flex flex-col items-center justify-center'>
        <Image
          src={Resource.Images.CATALOGUE}
          alt='product'
          width={300}
          height={250}
          objectFit='cover'
        />
      </div>

      <button
        className='bg-[#EEAA43] text-3xl w-full rounded-b-2xl
     text-white p-4 py-6 duration-500 transition-all hover:opacity-90'
      >
        مشاهده
      </button>
    </a>
  );
};

export default CatalogueCard;
