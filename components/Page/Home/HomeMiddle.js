import Image from 'next/image';
import Carousel from '../../Common/Carousel/Carousel';
import Resource from '../../../public/Resource';
import Feature from './Feature';
import ProductCard from '../../Common/ProductCard';

const HomeMiddle = () => {
  return (
    <div className='px-8 md:px- mt-10 w-full'>
      {/* firstPart */}
      <h2
        className='text-3xl md:text-6xl text-[#EFAF43] mt-40 mb-16 text-center font-semibold
      border-4 border-solid border-[#333] w-fit p-12 rounded-xl mx-auto'
      >
        به وبسایت شرکت دانش بنیان متالورژی پودر تبریز خوش آمدید
      </h2>
      <div className='flex flex-col lg:flex-row justify-between  mt-32 mb-20'>
        <div className='flex-1'>
          <h2
            className='text-5xl text-[#EFAF43] leading-normal mb-10 text-center
          font-semibold'
          >
            تاریخچه متالورژی پودر
          </h2>
          <p className='text-3xl text-gray-800 leading-normal mb-10 text-justify'>
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

        <div className='flex-1 relative lg:mr-20'>
          <Image
            src={Resource.Images.METALORIMG}
            alt='metalorzhyImage'
            layout='fill'
            objectFit='cover'
            className='rounded-xl absolute'
          />
        </div>
      </div>
      <h2 className='text-7xl text-[#EFAF43] mt-48 mb-16 text-center font-semibold'>
        محصولات شرکت
      </h2>
      <div className='flex items-center justify-evenly flex-wrap my-10 mb-32 '>
        <ProductCard
          name='بوش'
          img={Resource.Images.BG}
          onClick={() => router.push(`${Resource.Routes.CATEGORY}/بوش`)}
        />
        <ProductCard
          name='یاتاقان'
          img={Resource.Images.YATAGANJ}
          onClick={() => router.push(`${Resource.Routes.CATEGORY}/یاتاقان`)}
        />
        <ProductCard
          name='صفحات اصطکاکی'
          img={Resource.Images.WM}
          onClick={() =>
            router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی`)
          }
        />
        <ProductCard
          name='پودر فلزات'
          img={Resource.Images.BRONZE}
          onClick={() => router.push(`${Resource.Routes.CATEGORY}/پودر فلزات`)}
        />
      </div>
      {/* secondPart */}
      <h2 className='text-7xl text-[#EFAF43] mt-48 mb-16 text-center font-extrabold'>
        ارکان جهت‌ساز
      </h2>
      <div
        className='flex flex-wrap
         items-center justify-evenly w-full'
      >
        <Feature
          content='بیش از 1000 تن قطعات متالورژی پودر در سال'
          // img='https://debearings.com/wp-content/uploads/2016/08/de_icon_kg.png'
          heading='بیانیه چشم‌انداز'
        />
        <Feature
          content='بیش از 30 سال تجربه کاری در زمینه تولید قطعات به روش متالورژی پودر'
          // img='https://debearings.com/wp-content/uploads/2016/08/de_icon_check-1.png'
          heading='بیانیه ماموریت'
        />
        <Feature
          content='بیش از 1500 تن پودر فلزات رنگین در سال'
          // img='https://debearings.com/wp-content/uploads/2016/08/de_icon_feet.png'
          heading='ارزش‌ها'
        />
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
