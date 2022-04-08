import Image from 'next/image';
import Resource from '../../public/Resource';

const SingleProduct = (props) => {
  return (
    <div className='flex items-start shadow-lg'>
      <div>
        <div className='p-6 ml-6 cursor-pointer'>
          <Image
            src={props.productImage || Resource.Images.ENVIRONMENT2}
            alt={props.productName}
            width={100}
            height={100}
          />
        </div>
        <button
          className='bg-[#EEAA43]text-2xl w-full rounded-b-2xl
       text-white p-4 '
        >
          مشاهده‌همه
        </button>
      </div>
      <div>
        <h2>{props.productName}</h2>
        <p>{props.productDescription}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
