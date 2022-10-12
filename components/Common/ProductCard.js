import Image from 'next/image';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
  return (
    <div
      onClick={props.onClick}
      className='shadow-2xl rounded-2xl bg-white cursor-pointer 
      overflow-hidden mx-10 mb-10 group'
    >
      <div
        className='px-12 py-10 translate-y-20 group-hover:translate-y-0 
      flex flex-col items-center justify-center transition-all duration-500 ease'
      >
        <Image
          src={props.img}
          alt='product'
          objectFit='contain'
          width={250}
          height={150}
        />
        <span className='text-4xl font-[500] text-black ml-auto mt-10'>
          {props.name}
        </span>
      </div>

      <button
        className={`bg-[#EEAA43] text-3xl w-full rounded-b-2xl transition-all duration-500 ease 
       text-white p-6 overflow-hidden translate-y-24  group-hover:translate-y-0 `}
      >
        مشاهده
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default ProductCard;
