import Image from 'next/image';
import Carousel from './Carousel/Carousel';

const HomeMiddle = () => {
  return (
    <div className='px-8 md:px-40'>
      {/* firstPart */}
      <div
        className='grid grid-cols-1 md:grid-cols-3 gap-10 
      justify-items-center md:justify-items-end w-full'
      >
        <div className='md:col-span-2'>
          <h2 className='text-5xl text-black leading-normal mb-10'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </h2>
          <p className='text-3xl text-gray-800 leading-normal mb-10 text-justify'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <p className='text-3xl text-gray-800 leading-normal mb-10 text-justify'>
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <p className='text-3xl text-gray-800 leading-normal mb-10 text-justify'>
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <p className='text-3xl text-gray-800 leading-normal text-justify'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </div>
        <div>
          <div className='flex items-start mb-24 cursor-pointer'>
            <Image
              width={150}
              height={80}
              src={
                'https://debearings.com/wp-content/uploads/2016/02/de_iso_9001.png'
              }
              alt='ISO'
            />
          </div>
          <div className='cursor-pointer'>
            <Image
              width={150}
              height={80}
              src={
                'https://debearings.com/wp-content/uploads/2016/02/de_iso_14001.png'
              }
              alt='ISO'
            />
          </div>
        </div>
      </div>
      {/* secondPart */}
      <div>
        <div
          className='w-full flex items-center 
         justify-center'
        >
          <span className='text-[#D2D2D2]  text-8xl'>
            .....................................................................
          </span>
        </div>
        <div
          className='flex flex-wrap md:flex-nowrap
         items-start justify-evenly w-full'
        >
          <div
            className='flex items-start px-16 py-6 w-full'
            style={{
              borderRight: '4px solid #d2d2d2',
              borderLeft: '4px solid #d2d2d2',
            }}
          >
            <div className='flex flex-col'>
              <span className='text-2xl text-gray-700 mb-6'>بیش از</span>
              <span className='text-6xl text-black mb-2 font-[500]'>300</span>
              <span className='text-6xl text-black mb-8 font-[500]'>تن</span>
              <p className='text-4xl text-gray-800 text-justify  leading-normal'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </div>
            <Image
              width={150}
              height={150}
              src={
                'https://debearings.com/wp-content/uploads/2016/08/de_icon_kg.png'
              }
              alt='kilogeram'
            />
          </div>

          <div
            className='flex items-start px-16 py-6 w-full'
            style={{
              borderLeft: '4px solid #d2d2d2',
            }}
          >
            <div className='flex flex-col'>
              <span className='text-2xl text-gray-700 mb-6'>بیش از</span>
              <span className='text-6xl text-black mb-2 font-[500]'>50</span>
              <span className='text-6xl text-black mb-8 font-[500]'>سال</span>
              <p className='text-4xl text-gray-800 text-justify  leading-normal'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </div>
            <Image
              width={150}
              height={150}
              src={
                'https://debearings.com/wp-content/uploads/2016/08/de_icon_check-1.png'
              }
              alt='experience'
            />
          </div>

          <div
            className='flex items-start px-16 py-6 w-full'
            style={{
              borderLeft: '4px solid #d2d2d2',
            }}
          >
            <div className='flex flex-col'>
              <span className='text-2xl text-gray-700 mb-6'>روش</span>
              <span className='text-6xl text-black mb-2 font-[500]'>3</span>
              <span className='text-6xl text-black mb-8 font-[500]'>
                مرحله‌ای ما
              </span>
              <p className='text-4xl text-gray-800 text-justify leading-normal'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </div>
            <Image
              width={150}
              height={150}
              src={
                'https://debearings.com/wp-content/uploads/2016/08/de_icon_feet.png'
              }
              alt='3-way-method'
            />
          </div>
        </div>
        <div className='w-full flex items-center justify-center'>
          <span className='text-[#D2D2D2]  text-8xl'>
            .....................................................................
          </span>
        </div>
      </div>

      {/* thirdPart */}

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
        <Carousel />
        <div className='flex flex-col'>
          <div className='shadow-lg rounded-lg mb-10 p-10 cursor-pointer'>
            <span className='text-[#C98C07] text-2xl ml-4 mb-4'>اخبار</span>
            <span className='text-[#ACACAC] text-2xl mb-4 inline-block'>
              1396/06/24
            </span>
            <span className='text-4xl font-[500] text-black block'>
              گواهی ISO
            </span>
          </div>
          <div className='shadow-lg rounded-lg  mb-10 p-10 cursor-pointer'>
            <span className='text-[#C98C07] text-2xl ml-4 mb-4'>اخبار</span>
            <span className='text-[#ACACAC] text-2xl mb-4 inline-block'>
              1393/01/14
            </span>
            <span className='text-4xl font-[500] text-black block'>
              کنفرانس 14 و 15 آذر
            </span>
          </div>
          <div className='shadow-lg rounded-lg  mb-10 p-10 cursor-pointer'>
            <span className='text-[#C98C07] text-2xl ml-4 mb-4'>اخبار</span>
            <span className='text-[#ACACAC] text-2xl mb-4 inline-block'>
              1393/05/06
            </span>
            <span className='text-4xl font-[500] text-black block'>
              اطلاعات در مورد حفظ محیط زیست
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddle;
