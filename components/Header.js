import { useRef } from 'react';
import Resource from '../public/Resource';
import Image from 'next/image';
import { ControlledMenu, MenuItem, useMenuState } from '@szhsin/react-menu';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const productRef = useRef(null);

  const aboutRef = useRef(null);

  const [menuPropsProduct, toggleMenuProduct] = useMenuState({
    transition: true,
  });

  const [menuPropsAbout, toggleMenuAbout] = useMenuState({ transition: true });

  return (
    <nav className='fixed top-0 left-0 px-10 w-full z-[1000]'>
      <div className='flex items-center bg-[#E6E6E6] p-4 pr-20 shadow-lg'>
        {/* <Image /> */}
        {/* <span className='text-2xl ml-10'>زبان</span> */}

        {/* <Image /> */}
        <span className='text-2xl ml-10'>tabrizpm@yahoo.com</span>

        {/* <Image /> */}
        <span className='text-2xl ml-10'>04136306035-6</span>

        {/* <Image /> */}
        {/* <Image /> */}
        {/* <Image /> */}
      </div>

      <div
        className='relative  bg-white flex items-center justify-around 
      rounded-b-md shadow-lg  '
      >
        <Link passHref href={Resource.Routes.HOME}>
          <Image
            alt='main-logo'
            src={Resource.Images.LOGO}
            width={80}
            height={100}
            objectFit='contain'
            className='cursor-pointer'
          />
        </Link>
        <div>
          <Link passHref href={Resource.Routes.PRODUCTS}>
            <div className='cursor-pointer group'>
              <div
                className='text-3xl duration-300 transition-all
               hover:text-[#EFAF43]'
                ref={productRef}
                onMouseEnter={() => toggleMenuProduct(true)}
              >
                محصولات
              </div>
              <hr className='h-2 w-32 hidden group-hover:block absolute bottom-0 bg-[#EFAF43]' />
            </div>
          </Link>

          <ControlledMenu
            {...menuPropsProduct}
            anchorRef={productRef}
            align='end'
            onMouseLeave={() => toggleMenuProduct(false)}
            onClose={() => toggleMenuProduct(false)}
            menuStyle={{
              marginTop: '25px',
            }}
          >
            <div
              className='p-20 flex items-start justify-between
                bg-[#E7E7E7] w-[70vw]'
            >
              <div>
                <MenuItem className='text-3xl mb-4 font-[500]'>بوش</MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/بوش/BG`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  BG
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/بوش/BL`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  BL
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/بوش/BM`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  BM
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/بوش/BS`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  BS
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/بوش/BT`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  BT
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/بوش `)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  مشاهده‌همه
                </MenuItem>
              </div>
              <div>
                <MenuItem className='text-3xl mb-4 font-[500]'>
                  یاتاقان
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(
                      `${Resource.Routes.CATEGORY}/یاتاقان/یاتاقان پمپ باد`
                    )
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  یاتاقان پمپ باد
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(
                      `${Resource.Routes.CATEGORY}/یاتاقان/یاتاقان سواری`
                    )
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  یاتاقان سواری
                </MenuItem>

                <MenuItem
                  onClick={() =>
                    router.push(
                      `${Resource.Routes.CATEGORY}/یاتاقان/یاتاقان سنگین`
                    )
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  یاتاقان سنگین
                </MenuItem>

                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/یاتاقان `)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  مشاهده‌همه
                </MenuItem>
              </div>
              <div>
                <MenuItem className='text-3xl mb-4 font-[500]'>
                  صفحات اصطکاکی
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی/WG`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  WG
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی/WL`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  WL
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی/WM`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  WM
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی/WS`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  WS
                </MenuItem>

                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  مشاهده‌همه
                </MenuItem>
              </div>
              <div>
                <MenuItem className='text-3xl mb-4 font-[500]'>
                  پودر فلزات
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(
                      `${Resource.Routes.CATEGORY}/پودر فلزات/آلومینیوم`
                    )
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  آلومینیوم
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/پودر فلزات/برنز`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  برنز
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/پودر فلزات/مس`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  مس
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/پودر فلزات/برنج`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  برنج
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(
                      `${Resource.Routes.CATEGORY}/پودر فلزات/آهن آلیاژی و غیر آلیاژی`
                    )
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  آهن آلیاژی و غیر آلیاژی
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/پودر فلزات`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  مشاهده‌همه
                </MenuItem>
              </div>
              <div>
                <MenuItem className='text-3xl mb-4 font-[500]'>
                  قطعات خودرو
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/قطعات خودرو`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  لوله پمپ باد EF7
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/قطعات خودرو`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  قلاب مهار باد
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/قطعات خودرو`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  سبت باتری IR
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/قطعات خودرو`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  سبت باتری V10
                </MenuItem>

                <MenuItem
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی`)
                  }
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  مشاهده‌همه
                </MenuItem>
              </div>
            </div>
          </ControlledMenu>
        </div>

        {/*  */}

        <Link passHref href={Resource.Routes.CATALOGUE}>
          <div className='group'>
            <div className='text-3xl cursor-pointer duration-300 transition-al hover:text-[#EFAF43]'>
              کاتالوگ‌ها
            </div>
            <hr className='h-2 w-28 hidden group-hover:block absolute bottom-0 bg-[#EFAF43]' />
          </div>
        </Link>

        <div>
          <Link passHref href={Resource.Routes.ABOUT}>
            <div className='cursor-pointer group duration-300 transition-al hover:text-[#EFAF43]'>
              <div
                className='text-3xl'
                ref={aboutRef}
                onMouseEnter={() => toggleMenuAbout(true)}
              >
                درباره‌ما
              </div>
              <hr className='h-2 w-24 hidden group-hover:block absolute bottom-0 bg-[#EFAF43]' />
            </div>
          </Link>

          <ControlledMenu
            align='end'
            {...menuPropsAbout}
            anchorRef={aboutRef}
            onMouseLeave={() => toggleMenuAbout(false)}
            onClose={() => toggleMenuAbout(false)}
            menuStyle={{
              marginTop: '25px',
            }}
          >
            <MenuItem
              className='text-2xl border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
            >
              درباره‌شرکت و بخش تحقیق و توسعه
            </MenuItem>
          </ControlledMenu>
        </div>

        {/*  */}

        <Link passHref href={Resource.Routes.CONTACT}>
          <div className='group'>
            <div
              className='text-3xl cursor-pointer duration-300 transition-all
         hover:text-[#EFAF43] '
            >
              تماس‌با‌ما
            </div>
            <hr className='h-2 w-28 hidden group-hover:block absolute bottom-0 bg-[#EFAF43]' />
          </div>
        </Link>

        <button
          className='p-4 text-white bg-[#EFAF43] rounded-md mr-64 
        transition-all duration-300 hover:bg-[#333333] text-2xl'
        >
          ثبت درخواست
        </button>
      </div>
    </nav>
  );
};

export default Header;
