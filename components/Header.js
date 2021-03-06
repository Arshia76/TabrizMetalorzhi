import { useRef, useState, useContext } from 'react';
import Resource from '../public/Resource';
import Image from 'next/image';
import { ControlledMenu, MenuItem, useMenuState } from '@szhsin/react-menu';
import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CSSTransition } from 'react-transition-group';
import { useRouter } from 'next/router';
import useWindowSize from '../hooks/useWindowSize';
import { EnqueryContext } from './Layout';

const Sidebar = ({ setShow, show }) => {
  const router = useRouter();
  return (
    <div>
      <CSSTransition appear={show} in={show} timeout={1000} classNames='navbar'>
        <div className='w-[60%] z-[9999] fixed top-0 right-0 h-screen translate-x-[1000px] bg-white overflow-auto py-8 px-2'>
          <div className='flex items-center justify-between mb-10 px-4'>
            <h2 className='font-[500] text-4xl'>دسته بندی</h2>
            <GrClose
              cursor={'pointer'}
              size={25}
              onClick={() => setShow((state) => !state)}
            />
          </div>
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
          <div className='flex flex-col items-start mb-10'>
            <h4 className='text-3xl font-[500] mb-6 p-4'>بوش</h4>
            <div className='flex flex-col items-start'>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/بوش/BG`);
                  setShow(false);
                }}
              >
                BG
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/بوش/BT`);
                  setShow(false);
                }}
              >
                BT
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/بوش/BL`);
                  setShow(false);
                }}
              >
                BL
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/بوش/BS`);
                  setShow(false);
                }}
              >
                BS
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/بوش/BM`);
                  setShow(false);
                }}
              >
                BM
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/بوش`);
                  setShow(false);
                }}
              >
                مشاهده همه
              </span>
            </div>
          </div>

          {/* second */}

          <div className='flex flex-col items-start mb-10'>
            <h4 className='text-3xl font-[500] p-4 mb-6'>یاتاقان</h4>
            <div className='flex flex-col items-start'>
              <span
                className='text-3xl p-4 cursor-pointer '
                onClick={() => {
                  router.push(
                    `${Resource.Routes.CATEGORY}/یاتاقان/یاتاقان پمپ باد`
                  );
                  setShow(false);
                }}
              >
                یاتاقان پمپ باد
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(
                    `${Resource.Routes.CATEGORY}/یاتاقان/یاتاقان سواری`
                  );
                  setShow(false);
                }}
              >
                یاتاقان سواری
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(
                    `${Resource.Routes.CATEGORY}/یاتاقان/یاتاقان سنگین`
                  );
                  setShow(false);
                }}
              >
                یاتاقان سنگین
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/یاتاقان`);
                  setShow(false);
                }}
              >
                مشاهده همه
              </span>
            </div>
          </div>
          {/* third */}

          <div className='flex flex-col items-start mb-10'>
            <h4 className='text-3xl p-4 font-[500] mb-6'>صفحات اصطکاکی</h4>
            <div className='flex flex-col items-start'>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی/WG`);
                  setShow(false);
                }}
              >
                WG
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی/WM`);
                  setShow(false);
                }}
              >
                WM
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی/WS`);
                  setShow(false);
                }}
              >
                WS
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی/WL`);
                  setShow(false);
                }}
              >
                WL
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی`);
                  setShow(false);
                }}
              >
                مشاهده همه
              </span>
            </div>
          </div>
          {/* Forth */}

          <div className='flex flex-col items-start mb-10'>
            <h4 className='text-3xl p-4  font-[500] mb-6'>پودر فلزات</h4>
            <div className='flex flex-col items-start'>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(
                    `${Resource.Routes.CATEGORY}/پودر فلزات/آلومینیوم`
                  );
                  setShow(false);
                }}
              >
                آلومنیوم
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/پودر فلزات/برنز`);
                  setShow(false);
                }}
              >
                برنز
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/پودر فلزات/مس`);
                  setShow(false);
                }}
              >
                مس
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/پودر فلزات/برنج`);
                  setShow(false);
                }}
              >
                برنج
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(
                    `${Resource.Routes.CATEGORY}/پودر فلزات/آهن آلیاژی و غیر آلیاژی`
                  );
                  setShow(false);
                }}
              >
                آهن آلیاژی و غیر آلیاژی
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/پودر فلزات`);
                  setShow(false);
                }}
              >
                مشاهده همه
              </span>
            </div>
          </div>
          {/* Fifth */}
          <div className='flex flex-col items-start'>
            <h4 className='text-3xl p-4 font-[500] mb-6'>قطعات خودرو</h4>
            <div className='flex flex-col items-start'>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/قطعات خودرو`);
                  setShow(false);
                }}
              >
                لوله پمپ باد EF7
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/قطعات خودرو`);
                  setShow(false);
                }}
              >
                قلاب مهار باد
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/قطعات خودرو`);
                  setShow(false);
                }}
              >
                سبت باتری IR
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/قطعات خودرو`);
                  setShow(false);
                }}
              >
                سبت باتری V10
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/قطعات خودرو`);
                  setShow(false);
                }}
              >
                مشاهده همه
              </span>
            </div>
          </div>
        </div>
      </CSSTransition>
      <div
        className={`fixed top-0 left-0 z-40 
      opacity-70 h-screen w-screen bg-black ${show ? 'block' : 'hidden'}`}
      />
    </div>
  );
};

const ResponsiveHeader = ({ setShow, show }) => {
  const context = useContext(EnqueryContext);

  return (
    <nav className='fixed top-0 left-0  w-full z-[500]'>
      <div className='flex items-center bg-[#E6E6E6] p-4 pr-20 shadow-lg'>
        <span className='text-2xl ml-10'>tabrizpm@yahoo.com</span>

        <span className='text-2xl ml-10'>04136306035-6</span>
      </div>

      <div
        className=' bg-white items-center justify-around 
      rounded-b-md shadow-lg flex py-4'
      >
        <GiHamburgerMenu
          size={25}
          cursor='pointer'
          onClick={() => setShow((state) => !state)}
        />

        <button
          onClick={context.move}
          className='p-4 text-white bg-[#EFAF43] rounded-md mr-12
        transition-all duration-300 hover:bg-[#333333] text-2xl'
        >
          ثبت درخواست
        </button>
      </div>
      <Sidebar setShow={setShow} show={show} />
    </nav>
  );
};

const Header = () => {
  const context = useContext(EnqueryContext);
  const router = useRouter();
  const productRef = useRef(null);

  const aboutRef = useRef(null);

  const [menuPropsProduct, toggleMenuProduct] = useMenuState({
    transition: true,
  });

  const [menuPropsAbout, toggleMenuAbout] = useMenuState({ transition: true });

  const [showSideBar, setShowSideBar] = useState(false);
  const { width } = useWindowSize();

  if (width < 768) {
    return <ResponsiveHeader show={showSideBar} setShow={setShowSideBar} />;
  }

  return (
    <nav className='fixed top-0 left-0 px-10 w-full z-[1000]'>
      <div className='flex items-center bg-[#E6E6E6] p-4 pr-20 shadow-lg'>
        <span className='text-2xl ml-10'>tabrizpm@yahoo.com</span>

        <span className='text-2xl ml-10'>04136306035-6</span>
      </div>

      <div
        className='relative bg-white items-center justify-around 
      rounded-b-md shadow-lg  md:flex'
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
        <div className=''>
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
              onClick={() => router.push(Resource.Routes.ABOUT)}
              className='text-2xl border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
            >
              درباره‌شرکت و بخش تحقیق و توسعه
            </MenuItem>
          </ControlledMenu>
        </div>

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
          onClick={context.move}
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
