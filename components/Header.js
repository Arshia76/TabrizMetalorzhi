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
import {
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

const Sidebar = ({ setShow, show }) => {
  const router = useRouter();
  return (
    <div>
      <CSSTransition appear={show} in={show} timeout={1000} classNames='navbar'>
        <div className='w-[60%] z-[9999] fixed top-0 right-0 h-screen translate-x-[1000px] bg-white overflow-auto py-8 px-2'>
          <div className='flex items-center justify-between mb-10 px-4'>
            <h2 className='font-[500] text-3xl'>دسته بندی</h2>
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
          <div className='flex flex-col items-start mt-20'>
            <h4 className='text-3xl text-gray-900 font-[500] mb-2 p-4 '>بوش</h4>
            <div className='flex flex-col items-start'>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/بوش/BG`);
                  setShow(false);
                }}
              >
                سری BG
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/بوش/BT`);
                  setShow(false);
                }}
              >
                سری BT
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/بوش/BL`);
                  setShow(false);
                }}
              >
                سری BL
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/بوش/BS`);
                  setShow(false);
                }}
              >
                سری BS
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/بوش/BM`);
                  setShow(false);
                }}
              >
                سری BM
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

          <div className='flex flex-col items-start mt-20'>
            <h4 className='text-4xl text-gray-900 font-[500] p-4 mb-2'>
              یاتاقان
            </h4>
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

          <div className='flex flex-col items-start mt-20'>
            <h4 className='text-4xl text-gray-900 p-4 font-[500] mb-6'>
              صفحات اصطکاکی
            </h4>
            <div className='flex flex-col items-start'>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی/WG`);
                  setShow(false);
                }}
              >
                سری WG
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی/WM`);
                  setShow(false);
                }}
              >
                سری WM
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی/WS`);
                  setShow(false);
                }}
              >
                سری WS
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی/WL`);
                  setShow(false);
                }}
              >
                سری WL
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

          <div className='flex flex-col items-start mt-20'>
            <h4 className='text-4xl text-gray-900 p-4  font-[500] mb-2'>
              پودر فلزات
            </h4>
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
          <div className='flex flex-col items-start mt-20'>
            <h4 className='text-4xl text-gray-900 p-4 font-[500] mb-2'>
              قطعات خودرو
            </h4>
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
                بست باتری IR
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.CATEGORY}/قطعات خودرو`);
                  setShow(false);
                }}
              >
                بست باتری V10
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
          {/* News */}
          <div className='flex flex-col items-start mt-20'>
            <h4
              className='text-4xl text-gray-900 p-4 font-[500] mb-2 cursor-pointer'
              onClick={() => {
                router.push(`${Resource.Routes.NEWS}`);
                setShow(false);
              }}
            >
              اخبار
            </h4>
          </div>
          {/* About */}
          <div className='flex flex-col items-start mt-20 '>
            <h4
              className='text-4xl text-gray-900 p-4 font-[500] mb-2 cursor-pointer'
              onClick={() => {
                router.push(`${Resource.Routes.NEWS}`);
                setShow(false);
              }}
            >
              درباره ما
            </h4>

            <div className='flex flex-col items-start'>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.ABOUT}/metalorghy`);
                  setShow(false);
                }}
              >
                تاریخچه متالورژی پودر
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.ABOUT}/tabrizMetalorghy`);
                  setShow(false);
                }}
              >
                تاریخچه شرکت
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.ABOUT}/teach`);
                  setShow(false);
                }}
              >
                آموزش
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.ABOUT}/research`);
                  setShow(false);
                }}
              >
                بخش تحقیق و توسعه
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.ABOUT}/qualityControl`);
                  setShow(false);
                }}
              >
                کنترل کیفیت و آزمایشگاه
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.ABOUT}/goals`);
                  setShow(false);
                }}
              >
                اهداف کیفیت
              </span>
              <span
                className='text-3xl p-4 cursor-pointer'
                onClick={() => {
                  router.push(`${Resource.Routes.ABOUT}/policy`);
                  setShow(false);
                }}
              >
                خط مشی کیفیت
              </span>
            </div>
          </div>
          {/* Call us */}
          <h4
            className='cursor-pointer text-4xl text-gray-900 p-4 font-[500] mt-20'
            onClick={() => {
              router.push(`${Resource.Routes.CONTACT}`);
              setShow(false);
            }}
          >
            تماس‌با‌ما
          </h4>
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
  const submitRef = useRef(null);

  const [menuPropsSubmit, toggleMenuSubmit] = useMenuState({
    transition: true,
  });

  return (
    <nav className='fixed top-0 left-0  w-full z-[500]'>
      <div className='flex items-center justify-center bg-[#E6E6E6] p-4 pr-20 shadow-lg'>
        <AiOutlineFacebook
          size={30}
          color='grey'
          style={{ margin: '0 8px', cursor: 'pointer' }}
        />
        <AiOutlineLinkedin
          size={30}
          color='grey'
          style={{ margin: '0 8px', cursor: 'pointer' }}
        />
        <AiOutlineWhatsApp
          size={30}
          color='grey'
          style={{ margin: '0 8px', cursor: 'pointer' }}
        />
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

        <div>
          <button
            ref={submitRef}
            onClick={() => {
              // context.move();
              toggleMenuSubmit(true);
            }}
            className='p-4 text-white bg-[#EFAF43] rounded-md mr-64 
        transition-all duration-300 hover:bg-[#333333] text-2xl'
          >
            همکاری
          </button>
          <ControlledMenu
            align='end'
            {...menuPropsSubmit}
            anchorRef={submitRef}
            onClick={() => toggleMenuSubmit(false)}
            onClose={() => toggleMenuSubmit(false)}
            menuStyle={{
              marginTop: '10px',
            }}
          >
            <MenuItem
              onClick={() => router.push(`${Resource.Routes.ABOUT}/teach`)}
              className='text-2xl border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
            >
              استخدام
            </MenuItem>

            <MenuItem
              onClick={() => router.push(`${Resource.Routes.ABOUT}/research`)}
              className='text-2xl border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
            >
              ثبت سفارش
            </MenuItem>

            <MenuItem
              onClick={() =>
                router.push(`${Resource.Routes.ABOUT}/qualityControl`)
              }
              className='text-2xl border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
            >
              ارتباط با مشتری
            </MenuItem>
          </ControlledMenu>
        </div>
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
  const submitRef = useRef(null);

  const [menuPropsProduct, toggleMenuProduct] = useMenuState({
    transition: true,
  });
  const [menuPropsAbout, toggleMenuAbout] = useMenuState({ transition: true });

  const [menuPropsSubmit, toggleMenuSubmit] = useMenuState({
    transition: true,
  });

  const [showSideBar, setShowSideBar] = useState(false);
  const { width } = useWindowSize();

  if (width < 768) {
    return <ResponsiveHeader show={showSideBar} setShow={setShowSideBar} />;
  }

  return (
    <nav className='z-[1000] sticky top-0'>
      <div
        className='flex-row-reverse bg-white items-center justify-end 
      rounded-b-md shadow-lg px-20 md:flex sticky top-0'
      >
        <Link passHref href={Resource.Routes.HOME}>
          <Image
            alt='main-logo'
            src={Resource.Images.LOGO}
            width={80}
            height={90}
            objectFit='contain'
            className='cursor-pointer '
          />
        </Link>
        <div className='flex items-center justify-center flex-1'>
          <div className='mx-10'>
            <Link passHref href={Resource.Routes.HOME}>
              <div className='group'>
                <div
                  className='text-3xl cursor-pointer duration-300 transition-all
         hover:text-[#EFAF43] '
                >
                  صفحه‌اصلی
                </div>
                <hr className='h-2 w-32 hidden group-hover:block absolute bottom-0 bg-[#EFAF43]' />
              </div>
            </Link>
          </div>
          <div className='mx-10'>
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
              <div className='px-4 pt-4 flex flex-col items-start justify-between'>
                <div
                  onClick={() => router.push(`${Resource.Routes.CATEGORY}/بوش`)}
                >
                  <MenuItem className='text-3xl mb-4 font-[500]'>بوش</MenuItem>
                </div>
                <div
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/یاتاقان`)
                  }
                >
                  <MenuItem className='text-3xl mb-4 font-[500]'>
                    یاتاقان
                  </MenuItem>
                </div>
                <div
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی`)
                  }
                >
                  <MenuItem className='text-3xl mb-4 font-[500]'>
                    صفحات اصطکاکی
                  </MenuItem>
                </div>
                <div
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/پودر فلزات`)
                  }
                >
                  <MenuItem className='text-3xl mb-4 font-[500]'>
                    پودر فلزات
                  </MenuItem>
                </div>
                <div
                  onClick={() =>
                    router.push(`${Resource.Routes.CATEGORY}/قطعات خودرو`)
                  }
                >
                  <MenuItem className='text-3xl mb-4 font-[500]'>
                    قطعات خودرو
                  </MenuItem>
                </div>
              </div>
            </ControlledMenu>
          </div>

          <Link passHref href={Resource.Routes.CATALOGUE}>
            <div className='group mx-10'>
              <div className='text-3xl cursor-pointer duration-300 transition-al hover:text-[#EFAF43]'>
                کاتالوگ
              </div>
              <hr className='h-2 w-28 hidden group-hover:block absolute bottom-0 bg-[#EFAF43]' />
            </div>
          </Link>

          <Link passHref href={Resource.Routes.NEWS}>
            <div className='group mx-10'>
              <div className='text-3xl cursor-pointer duration-300 transition-al hover:text-[#EFAF43]'>
                اخبار
              </div>
              <hr className='h-2 w-14 hidden group-hover:block absolute bottom-0 bg-[#EFAF43]' />
            </div>
          </Link>

          <div className='mx-10'>
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
                onClick={() =>
                  router.push(`${Resource.Routes.ABOUT}/metalorghy`)
                }
                className='text-2xl border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
              >
                تاريخچه متالورژی پودر
              </MenuItem>
              <MenuItem
                onClick={() =>
                  router.push(`${Resource.Routes.ABOUT}/tabrizMetalorghy`)
                }
                className='text-2xl border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
              >
                تاريخچه شرکت
              </MenuItem>
              <MenuItem
                onClick={() => router.push(`${Resource.Routes.ABOUT}/teach`)}
                className='text-2xl border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
              >
                آموزش
              </MenuItem>

              <MenuItem
                onClick={() => router.push(`${Resource.Routes.ABOUT}/research`)}
                className='text-2xl border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
              >
                بخش تحقیق و توسعه
              </MenuItem>

              <MenuItem
                onClick={() =>
                  router.push(`${Resource.Routes.ABOUT}/qualityControl`)
                }
                className='text-2xl border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
              >
                کنترل کیفیت و آزمایشگاه
              </MenuItem>

              <MenuItem
                onClick={() => router.push(`${Resource.Routes.ABOUT}/goals`)}
                className='text-2xl border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
              >
                اهداف کیفیتی
              </MenuItem>

              <MenuItem
                onClick={() => router.push(`${Resource.Routes.ABOUT}/policy`)}
                className='text-2xl border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
              >
                خط مشی کیفیت
              </MenuItem>
              <MenuItem
                onClick={() =>
                  router.push(`${Resource.Routes.ABOUT}/certification`)
                }
                className='text-2xl border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
              >
                گواهی‌ها
              </MenuItem>
            </ControlledMenu>
          </div>

          <Link passHref href={Resource.Routes.CONTACT}>
            <div className='group mx-10'>
              <div
                className='text-3xl cursor-pointer duration-300 transition-all
         hover:text-[#EFAF43] '
              >
                تماس‌با‌ما
              </div>
              <hr className='h-2 w-28 hidden group-hover:block absolute bottom-0 bg-[#EFAF43]' />
            </div>
          </Link>
          <div>
            <button
              ref={submitRef}
              onMouseEnter={() => {
                // context.move();
                toggleMenuSubmit(true);
              }}
              // onMouseOut={() => toggleMenuSubmit(false)}
              className='px-8 py-4 text-white bg-[#EFAF43] rounded-md  
        transition-all duration-300 hover:bg-[#333333] text-3xl'
            >
              همکاری
            </button>
            <ControlledMenu
              align='end'
              {...menuPropsSubmit}
              anchorRef={submitRef}
              onMouseLeave={() => toggleMenuSubmit(false)}
              onClose={() => toggleMenuSubmit(false)}
              menuStyle={{
                marginTop: '10px',
              }}
            >
              <MenuItem
                onClick={() => router.push('/employ')}
                className='text-2xl border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
              >
                استخدام
              </MenuItem>

              <MenuItem
                onClick={() => router.push('/employ')}
                className='text-2xl border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
              >
                ثبت سفارش
              </MenuItem>

              <MenuItem
                onClick={() => router.push('/employ')}
                className='text-2xl border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
              >
                ارتباط با مشتری
              </MenuItem>
            </ControlledMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
