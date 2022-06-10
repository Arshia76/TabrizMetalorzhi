import HeaderContent from '../components/HeaderContent';
import HomeMiddle from '../components/HomeMiddle';
import ProductCard from '../components/ProductCard';
import Resource from '../public/Resource';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <main className='overflow-hidden'>
      <HeaderContent />
      <div
        className='flex items-center justify-evenly 
         px-32 md:translate-y-[-40px] flex-wrap md:flex-nowrap  
      mb-10 '
      >
        <ProductCard
          name='بوش'
          img={Resource.Images.BG}
          onClick={() => router.push(`${Resource.Routes.CATEGORY}/بوش`)}
        />
        <ProductCard
          name='یاتاقان'
          img={Resource.Images.YATAGAN}
          onClick={() => router.push(`${Resource.Routes.CATEGORY}/یاتاقان`)}
        />
        <ProductCard
          name='صفحات اصطکاکی'
          img={Resource.Images.WM}
          onClick={() =>
            router.push(`${Resource.Routes.CATEGORY}/صفحه اصطکاکی`)
          }
        />
        <ProductCard
          name='پودر فلزات'
          img={Resource.Images.BRONZE}
          onClick={() => router.push(`${Resource.Routes.CATEGORY}/پودر فلزات`)}
        />
      </div>
      <HomeMiddle />
    </main>
  );
}
