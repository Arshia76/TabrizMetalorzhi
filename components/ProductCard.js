import { useState } from 'react';
import Image from 'next/image';
import Resource from '../public/Resource';

const ProductCard = () => {
  const [showBtn, setShowBtn] = useState(false);

  const hover = () => {
    setShowBtn(!showBtn);
  };

  return (
    <div
      onMouseEnter={hover}
      onMouseLeave={hover}
      className='shadow-2xl rounded-2xl bg-white cursor-pointer
      overflow-hidden w-full mx-10 mb-10 md:mb-0'
    >
      <div className='px-12 py-10 flex flex-col  items-center justify-center'>
        <Image
          src={Resource.Images.ENVIRONMENT1}
          alt='product'
          width={250}
          height={150}
        />
        <span className='text-3xl text-black ml-auto mt-10'>نام کالا</span>
      </div>

      <button
        className={`bg-[#EEAA43] hidden text-2xl w-full rounded-b-2xl
       text-white p-4 translate-y-[55000px]  ${
         showBtn
           ? 'animate-btnMoveUpAnimation block'
           : 'animate-btnMoveDownAnimation hidden'
       } `}
      >
        مشاهده
      </button>
    </div>
  );
};

export default ProductCard;
