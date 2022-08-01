import About from '../../components/About/About';
import AboutContent from '../../components/About/AboutContent';
import { useRouter } from 'next/router';
import { aboutPart } from '../../data';

const AboutPage = () => {
  const router = useRouter();
  const route = router.query.about?.[0];
  let title;

  if (route === 'teach') {
    title = 'آموزش';
  } else if (route === 'research') {
    title = 'تخقیق و توسعه';
  } else if (route === 'qualityControl') {
    title = 'کنترل کیفیت و آزمایشگاه';
  } else if (route === 'goals') {
    title = 'اهداف کیفیتی';
  } else if (route === 'policy') {
    title = 'خط مشی کیفیت';
  } else {
    title = 'درباره ما';
  }

  const content = aboutPart[route];
  return (
    <main>
      <About title={title} />
      <AboutContent content={content} />
    </main>
  );
};

export default AboutPage;
