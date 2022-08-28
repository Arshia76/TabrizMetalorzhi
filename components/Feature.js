import Image from 'next/image';

const Feature = (props) => {
  return (
    <div
      className='bg-black flex overflow-hidden flex-col transition-all 
      duration-700 ease-in h-[300px] group justify-center items-center
    rounded-xl w-[400px] mx-6 mb-12 relative'
    >
      <div
        className='flex justify-center items-center w-full px-20 group-hover:max-h-full absolute
      left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]'
      >
        <p
          className='text-white text-4xl text-center
        group-hover:opacity-100 group-hover:translate-x-0
        opacity-0 translate-x-[-100px] group-hover:transition-all font-semibold
        group-hover:duration-1000 group-hover:ease-in leading-normal'
        >
          {props.content}
        </p>
      </div>
      <div
        className='bg-gray-700 w-full text-center py-16 h-full
      max-h-full transition-all duration-1000 ease-in flex 
      items-center justify-center group-hover:rounded-tl-[50px]
      group-hover:rounded-tr-[50px] group-hover:max-h-auto group-hover:translate-y-[500px]
      group-hover:items-start group-hover:transition-all group-hover:duration-1000 
      group-hover:ease-in'
      >
        <Image
          src={props.img}
          alt='feature'
          width={80}
          height={80}
          className='transition-all duration-1000 ease-in '
        />
      </div>
    </div>
  );
};

export default Feature;
