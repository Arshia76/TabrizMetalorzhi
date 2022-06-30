import ModalImage from 'react-modal-image';
import Resource from '../../public/Resource';

const AboutContent = () => {
  return (
    <div className='md:px-40 mt-10 mb-20'>
      <div className='  w-full'>
        <div>
          <div className=' mb-10 mt-14'>
            <h1 className='text-3xl text-black leading-loose text-justify'>
              در سال 1373 با هدف توليد قطعات به روش متالوژي پودر تاسيس و در سال
              1375 با ظرفيت توليد سالانه 42 تن قطعات باي متال آغاز به كار نموده
              و در سال 1377 به بهره برداري رسيده است در پي سياستهاي كلان توسعه
              شركت متالوژي پودر تبريز در حال حاضر با ظرفيت توليد 450 تن در سال
              توانسته بخشي از بازارهاي داخلي و خارجي را به خود اختصاص داده و
              همكاري خود را با صنايع سبك و سنگين مرتبط داخل كشور و نيز در زمينه
              صادرات با كشورهاي آسيايي و اروپايي ادامه دهد با توجه به جهاني شدن
              توليدات ، شركت متالوژي پودر تبريز حركت به سوي استقرار نظامهاي
              مديريت كيفيت و سيستمهاي مرتبط با آن را در سرلوحه برنامه هاي كيفي
              خود قرارداده و در اين زمينه موفق به اخذ مدارك معتبر صنفي ، ملي و
              بين المللي گرديده ات در حال حاضر اين شركت با اشتغال پرسنل و
              متخصصان توانمند داخلي و خارجي اقدام به استقرار خطوط توليدي روز
              جهاني نموده است و در برنامه كلان خود ايجاد مجتمع متالوژي پودر
              تبريز يعني توليد انواع پودرهاي فلزي - انواع قطعات باي متال -
              ياتاقان خودرو- انواع قطعات پودري و انواع صفحات اصطكاكي را برنامه
              ريزي نموده كه به ترتيب در حال استقرار خطوط فوق مي باشند
            </h1>
          </div>

          <h2 className='text-6xl text-black leading-normal mb-10 mt-14'>
            گواهی نامه‌ها
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-16 w-full'>
            <ModalImage
              small={'../Resource/Images/Govahi/govahi1.jpg'}
              large={Resource.Images.GOVAHI1_BIG}
            />
            <ModalImage
              small={Resource.Images.GOVAHI2}
              large={Resource.Images.GOVAHI2_BIG}
            />
            <ModalImage
              small={Resource.Images.GOVAHI3}
              large={Resource.Images.GOVAHI3_BIG}
            />

            <ModalImage
              small={Resource.Images.GOVAHI4}
              large={Resource.Images.GOVAHI4_BIG}
            />
            <ModalImage
              small={Resource.Images.GOVAHI5}
              large={Resource.Images.GOVAHI5_BIG}
            />
            <ModalImage
              small={Resource.Images.GOVAHI6}
              large={Resource.Images.GOVAHI6_BIG}
            />
            <ModalImage
              small={Resource.Images.GOVAHI7}
              large={Resource.Images.GOVAHI7_BIG}
            />
            <ModalImage
              small={Resource.Images.GOVAHI8}
              large={Resource.Images.GOVAHI8_BIG}
            />
            <ModalImage
              small={Resource.Images.GOVAHI9}
              large={Resource.Images.GOVAHI9_BIG}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
