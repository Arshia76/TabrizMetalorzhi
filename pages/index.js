import HeaderContent from '../components/HeaderContent';
import HomeMiddle from '../components/HomeMiddle';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <HeaderContent />
      <div
        className='flex items-center justify-evenly 
         px-32 md:translate-y-[-40px] flex-wrap md:flex-nowrap  
      mb-10 '
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <HomeMiddle />
    </main>
  );
}
