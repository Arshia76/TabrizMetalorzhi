import HeaderContent from '../components/Page/Home/HeaderContent';
import HomeMiddle from '../components/Page/Home/HomeMiddle';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <main className='overflow-hidden'>
      <HeaderContent />
      <HomeMiddle />
    </main>
  );
}
