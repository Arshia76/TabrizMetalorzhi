import { createContext, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

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
        <Header />
        {props.children}
        <Footer />
      </div>
    </EnqueryContext.Provider>
  );
};

export default Layout;
