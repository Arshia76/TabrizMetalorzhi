import React from 'react';

const CategoryHero = (props) => {
  return (
    <div
      className='overflow-y-auto overflow-x-hidden relative mb-64 h-[100vh]
    bg-[url("https://debearings.com/wp-content/themes/d_och_e/assets/images/debearings-pattern-2.png")]
    bg-cover bg-no-repeat bg-center bg-fixed mt-16'
    >
      <div
        className='flex flex-col justify-center items-center px-20 mt-64
'
      >
        <h2 className='text-7xl text-gray-800 text-center mb-10 leading-normal'>
          {props.category || 'نام دسته'}
        </h2>
        <p className='text-4xl leading-loose text-gray-700 text-justify'>
          {props.description ||
            `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. `}
        </p>
      </div>
      {/* <div className='absolute bottom-0 left-0 translate-y-24'>
        <Image
          src={
            'https://debearings.com/wp-content/uploads/2016/07/ledlager-underhallsfritt.png'
          }
          alt='img'
          width={300}
          height={300}
        />
      </div> */}
    </div>
  );
};

export default CategoryHero;
