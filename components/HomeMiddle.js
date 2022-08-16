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
            تاریخچه متالورژی پودر
          </h2>
          <p className='text-3xl text-gray-800 leading-normal mb-10 text-justify  '>
            متالورژی پودر فرایند ساخت و تولید قطعات فازی است که اساس آن فشردن
            پودرمواد به شکل مورد نظر و تف جوشی آن است که در درجه حرارتی زیر نقطه
            ذوب صورت می‌پذیرد.قطعات متالورژی پودر در انواع صنایع مانند
            خودرو،لوازم خانگی،الکترونیک و سایر کاربر نموده است.بیشترین کاربرهای
            قطعات متالورژی پودر در صنایع خودروسازی می‌باشدکه موازی با آن رشد
            نموده،به صورتی که بقای صنعت متالورژی پودر در کشورهای صنعتی بسیار
            وابسته به صنعت خودروسازی می‌باشد. کنترل شده صورت می‌پذیرد با وجود
            اینکه از نظر تاریخی متالورژی پودر از قدیمی‌ترین روش‌های شکل دهی
            است،اما تولید در مقادیر تجاری با این روش از جدیدترین راهکارهای تولید
            قعات فلزی است.در این روش پس از عمل فشردن و تراکم پودرهای فلزی،عمل
            تف‌جوش در یک محیط کنترل شده انجام می‌پذیرد که در آن فلز متراکم، جوش
            خورده و به صورت ساختمان همگن و محکم پیوند می‌خورد. در شرایط امروز
            تغییرا ت گشترده و روزمره پیشبینی بلند مدت را دشوار ساخته لذا در چنین
            شرایطی راهکارهای پیشنهادی، برخورد با قدرت تغییرات و چالش‌های آن
            می‌باشد ، لذا بایستی به استقبال تغییرات رفت و بجای پیش‌بینی، آنهارا
            ایجاد نمود چراکه خلق آینده بسیار پر اهمیت می‌باشد.
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
            <div className='flex flex-col ml-48'>
              <span className='text-2xl text-gray-700 mb-6'>بیش از</span>
              <span className='text-6xl text-black mb-2 font-[500]'>1000</span>
              <span className='text-6xl text-black mb-8 font-[500]'>تن</span>
              <p className='text-4xl text-gray-800 text-justify  leading-normal'>
                قطعات متالورژی پودر در سال
              </p>
            </div>
            <Image
              width={120}
              height={120}
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
            <div className='flex flex-col ml-48'>
              <span className='text-2xl text-gray-700 mb-6'>بیش از</span>
              <span className='text-6xl text-black mb-2 font-[500]'>30</span>
              <span className='text-6xl text-black mb-8 font-[500]'>سال</span>
              <p className='text-4xl text-gray-800 text-justify  leading-normal'>
                تجربه کاری در زمینه تولید قطعات به روش متالورژی پودر
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
            <div className='flex flex-col ml-48'>
              <span className='text-2xl text-gray-700 mb-6'>بیش از</span>
              <span className='text-6xl text-black mb-2 font-[500]'>1500</span>
              <span className='text-6xl text-black mb-8 font-[500]'>تن</span>
              <p className='text-4xl text-gray-800 text-justify leading-normal'>
                پودر فلزات رنگین در سال
              </p>
            </div>
            <Image
              width={120}
              height={120}
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
