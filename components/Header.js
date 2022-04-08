import { useRef } from 'react';
import Resource from '../public/Resource';
import Image from 'next/image';
import { ControlledMenu, MenuItem, useMenuState } from '@szhsin/react-menu';
import Link from 'next/link';

const Header = () => {
  const productRef = useRef(null);
  const catalogueRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  //   const [isOpenProduct, setOpenProduct] = useState();
  //   const [isOpenCatalogue, setOpenCatalogue] = useState();
  //   const [isOpenAbout, setOpenAbout] = useState();
  //   const [isOpenContact, setOpenContact] = useState();

  const [menuPropsProduct, toggleMenuProduct] = useMenuState({
    transition: true,
  });
  const [menuPropsCatalogue, toggleMenuCatalogue] = useMenuState({
    transition: true,
  });
  const [menuPropsAbout, toggleMenuAbout] = useMenuState({ transition: true });
  const [menuPropsContact, toggleMenuContact] = useMenuState({
    transition: true,
  });

  return (
    <nav className='fixed top-0 left-0 px-10 w-full z-[1000]'>
      <div className='flex items-center bg-[#E6E6E6] p-4 pr-20 shadow-lg'>
        {/* <Image /> */}
        <span className='text-2xl ml-10'>زبان</span>

        {/* <Image /> */}
        <span className='text-2xl ml-10'>arshia@yahoo.com</span>

        {/* <Image /> */}
        <span className='text-2xl ml-10'>041-36684575</span>

        {/* <Image /> */}
        {/* <Image /> */}
        {/* <Image /> */}
      </div>

      <div
        className='relative py-2 bg-white flex items-center justify-around 
      rounded-b-md shadow-lg '
      >
        <Link passHref href={Resource.Routes.HOME}>
          <Image
            alt='main-logo'
            src={Resource.Images.LOGO}
            width={80}
            height={80}
            objectFit='contain'
            className='cursor-pointer'
          />
        </Link>
        <div>
          <Link passHref href={Resource.Routes.PRODUCTS}>
            <div className='cursor-pointer'>
              <div
                className='text-3xl duration-300 transition-all
               hover:text-[#EFAF43]'
                ref={productRef}
                onMouseEnter={() => toggleMenuProduct(true)}
              >
                محصولات
              </div>
              <hr className='h-2 w-32 absolute bottom-0 bg-[#EFAF43]' />
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
              className='p-20 flex items-center justify-between
                bg-[#E7E7E7] w-[70vw]'
            >
              <div>
                <MenuItem className='text-3xl mb-4 font-[500]'>دسته‌1</MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  محصول‌1
                </MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  محصول‌2
                </MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  محصول‌3
                </MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  محصول‌4
                </MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  محصول‌5
                </MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  مشاهده‌همه
                </MenuItem>
              </div>
              <div>
                <MenuItem className='text-2xl mb-4 font-semibold'>
                  دسته‌2
                </MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  محصول‌1
                </MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  محصول‌2
                </MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  محصول‌3
                </MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  محصول‌4
                </MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  محصول‌5
                </MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  مشاهده‌همه
                </MenuItem>
              </div>
              <div>
                <MenuItem className='text-2xl mb-4 font-semibold'>
                  دسته‌3
                </MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  محصول‌1
                </MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  محصول‌2
                </MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  محصول‌3
                </MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  محصول‌4
                </MenuItem>
                <MenuItem
                  className='text-2xl mb-4 border-transparent border-solid border-r-4 
              hover:border-r-4 hover:border-solid hover:border-r-[#EFAF43]'
                >
                  محصول‌5
                </MenuItem>
                <MenuItem
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
          <div>
            <div className='text-3xl cursor-pointer duration-300 transition-al hover:text-[#EFAF43]'>
              گاتالوگ‌ها
            </div>
            <hr className='h-2 w-28 absolute bottom-0 bg-[#EFAF43]' />
          </div>
        </Link>

        <div>
          <Link passHref href={Resource.Routes.ABOUT}>
            <div className='cursor-pointer duration-300 transition-al hover:text-[#EFAF43]'>
              <div
                className='text-3xl'
                ref={aboutRef}
                onMouseEnter={() => toggleMenuAbout(true)}
              >
                درباره‌ما
              </div>
              <hr className='h-2 w-24 absolute bottom-0 bg-[#EFAF43]' />
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
          <div>
            <div
              className='text-3xl cursor-pointer duration-300 transition-all
         hover:text-[#EFAF43] '
            >
              تماس‌با‌ما
            </div>
            <hr className='h-2 w-28 absolute bottom-0 bg-[#EFAF43]' />
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
