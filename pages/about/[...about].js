import About from '../../components/About/About';
import AboutContent from '../../components/About/AboutContent';
import { useRouter } from 'next/router';
import { aboutPart } from '../../data';
import Resource from '../../public/Resource';

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
  } else if (route === 'metalorghy') {
    title = 'تاریخچه متالورژی پودر';
  } else if (route === 'tabrizMetalorghy') {
    title = 'تاریخچه متالورژی پودر تبریز';
  } else if (route === 'certification') {
    title = 'گواهی‌ها';
  } else {
    router.push(Resource.Routes.HOME);
  }

  const content = aboutPart[route];
  const isCertification = route === 'certification';
  return (
    <main>
      <About title={title} />
      <AboutContent content={content} isCertification={isCertification} />
    </main>
  );
};

export default AboutPage;
