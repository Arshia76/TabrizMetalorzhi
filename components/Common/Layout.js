import { createContext, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

export const EnqueryContext = createContext();

const Layout = (props) => {
  const ref = useRef();

  const move = () =>
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'end',
    });

  return (
    <EnqueryContext.Provider
      value={{
        ref,
        move,
      }}
    >
      <div>
        <div
          className='flex items-center justify-between bg-[#333] px-10 p-1 shadow-lg
        '
        >
          <div className='flex items-center '>
            <AiOutlineFacebook
              size={22}
              color='#fff'
              style={{ margin: '0 3px', cursor: 'pointer' }}
              className='hover:!text-orange-400 transition-all ease-in duration-300'
            />
            <AiOutlineLinkedin
              size={22}
              color='#fff'
              style={{ margin: '0 3px', cursor: 'pointer' }}
              className='hover:!text-orange-400 transition-all ease-in duration-300'
            />
            <AiOutlineWhatsApp
              size={22}
              color='#fff'
              style={{ margin: '0 3px', cursor: 'pointer' }}
              className='hover:!text-orange-400 transition-all ease-in duration-300'
            />
            <AiOutlineInstagram
              size={22}
              color='#fff'
              style={{ margin: '0 3px', cursor: 'pointer' }}
              className='hover:!text-orange-400 transition-all ease-in duration-300'
            />
          </div>
          <div className='flex items-center rounded-lg my-1 py-1 bg-white '>
            <BiSearch size={24} color='grey' />
            <input
              type='text'
              className='w-full pr-6 text-2xl text-black !outline-none '
              placeholder='جستجو'
            />
          </div>
        </div>
        <Header />
        {props.children}
        <Footer />
      </div>
    </EnqueryContext.Provider>
  );
};

export default Layout;
