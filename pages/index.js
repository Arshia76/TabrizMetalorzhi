import HeaderContent from '../components/Page/Home/HeaderContent';
import HomeMiddle from '../components/Page/Home/HomeMiddle';
import ProductCard from '../components/Common/ProductCard';
import Resource from '../public/Resource';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <main className='overflow-hidden'>
      <HeaderContent />
      <h2 className='text-7xl mt-32 mb-16 text-center font-semibold'>
        محصولات شرکت
      </h2>
      <div
        className='flex items-center justify-evenly flex-wrap my-10  
         md:px-2
       '
      >
        <ProductCard
          name='بوش'
          img={Resource.Images.BG}
          onClick={() => router.push(`${Resource.Routes.CATEGORY}/بوش`)}
        />
        <ProductCard
          name='یاتاقان'
          img={Resource.Images.YATAGANJ}
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
