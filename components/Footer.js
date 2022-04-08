import ContactForm from './ContactForm';
import ContactUs from './ContactUs';

import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../components/Map'), {
  ssr: false,
});

const Footer = () => {
  return (
    <footer className='w-full h-full'>
      <div className='px-8 md:px-40'>
        <ContactForm />
        <ContactUs />
      </div>
      <div className='w-full mt-10'>
        <DynamicMap />
      </div>
    </footer>
  );
};

export default Footer;
