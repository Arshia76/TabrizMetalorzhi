import { useRouter } from 'next/router';
import { GrClose } from 'react-icons/gr';

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className='w-screen md:translate-x-[100%] flex fixed top-0 right-0 h-screen z-[9999]'>
      <div className='w-[45%] z-[9999] bg-white overflow-auto py-8 px-2'>
        <div className='flex items-center justify-between mb-10 px-4'>
          <h2 className='font-[500] text-4xl'>دسته بندی</h2>
          <GrClose size={25} />
        </div>
        <div className='flex flex-col items-start mb-10'>
          <h4 className='text-3xl font-[500] mb-6 p-4'>بوش</h4>
          <div className='flex flex-col items-start'>
            <span className='text-3xl p-4 cursor-pointer'>BG</span>
            <span className='text-3xl p-4 cursor-pointer'>BT</span>
            <span className='text-3xl p-4 cursor-pointer'>BL</span>
            <span className='text-3xl p-4 cursor-pointer'>BS</span>
            <span className='text-3xl p-4 cursor-pointer'>BM</span>
            <span className='text-3xl p-4 cursor-pointer'>مشاهده همه</span>
          </div>
        </div>

        {/* second */}

        <div className='flex flex-col items-start mb-10'>
          <h4 className='text-3xl font-[500] p-4 mb-6'>یاتاقان</h4>
          <div className='flex flex-col items-start'>
            <span className='text-3xl p-4 cursor-pointer '>
              یاتاقان پمپ باد
            </span>
            <span className='text-3xl p-4 cursor-pointer'>یاتاقان سواری</span>
            <span className='text-3xl p-4 cursor-pointer'>یاتاقان سنگین</span>
            <span className='text-3xl p-4 cursor-pointer'>مشاهده همه</span>
          </div>
        </div>
        {/* third */}

        <div className='flex flex-col items-start mb-10'>
          <h4 className='text-3xl p-4 font-[500] mb-6'>صفحات اصطکاکی</h4>
          <div className='flex flex-col items-start'>
            <span className='text-3xl p-4 cursor-pointer'>WG</span>
            <span className='text-3xl p-4 cursor-pointer'>WM</span>
            <span className='text-3xl p-4 cursor-pointer'>WS</span>
            <span className='text-3xl p-4 cursor-pointer'>WL</span>
            <span className='text-3xl p-4 cursor-pointer'>مشاهده همه</span>
          </div>
        </div>
        {/* Forth */}

        <div className='flex flex-col items-start mb-10'>
          <h4 className='text-3xl p-4  font-[500] mb-6'>پودر فلزات</h4>
          <div className='flex flex-col items-start'>
            <span className='text-3xl p-4 cursor-pointer'>آلومنیوم</span>
            <span className='text-3xl p-4 cursor-pointer'>برنز</span>
            <span className='text-3xl p-4 cursor-pointer'>مس</span>
            <span className='text-3xl p-4 cursor-pointer'>برنج</span>
            <span className='text-3xl p-4 cursor-pointer'>
              آهن آلیاژی و غیر آلیاژی
            </span>
            <span className='text-3xl p-4 cursor-pointer'>مشاهده همه</span>
          </div>
        </div>
        {/* Fifth */}
        <div className='flex flex-col items-start'>
          <h4 className='text-3xl p-4 font-[500] mb-6'>قطعات خودرو</h4>
          <div className='flex flex-col items-start'>
            <span className='text-3xl p-4 cursor-pointer'>
              لوله پمپ باد EF7
            </span>
            <span className='text-3xl p-4 cursor-pointer'>قلاب مهار باد</span>
            <span className='text-3xl p-4 cursor-pointer'>سبت باتری IR</span>
            <span className='text-3xl p-4 cursor-pointer'>سبت باتری V10</span>
            <span className='text-3xl p-4 cursor-pointer'>مشاهده همه</span>
          </div>
        </div>
      </div>
      <div className='w-[80%] z-[9000] md:hidden bg-[rgba(0,0,0,.5)]'></div>
    </div>
  );
};

export default Sidebar;
