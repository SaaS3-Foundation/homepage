import SectionHero from './SectionHero/index.js';
import './index.less';
import SectionIntro from './SectionIntro/index.js';
import SectionLaunch from './SectionLaunch/index.js';
import SectionProject from './SectionProject/index.js';
import SectionNetwork from './SectionNetwork/index.js';
import SectionParachains from './SectionParachains/index.js';
import SectionYoutube from './SectionYoutube/index.js';
import Partners from '../../components/comm/Partners/index.js';
import BaseLayout from '../../components/comm/layout/BaseLayout/index.js';
import { useEffect } from 'react';

function HomePage() {
  // useEffect(() => {
  //   const callback = (entries, observer) => {
  //     entries.forEach((entry, i) => {
  //       const top =
  //         window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //       if (entry.isIntersecting) {
  //         const { intersectionRatio, intersectionRect } = entry;
  //         const { top } = intersectionRect;
  //         if (top) {
  //           entry.target.style.setProperty('--progress', intersectionRatio * 100 + '%');
  //         } else {
  //         }
  //         console.log(top, entry);
  //       }
  //     });
  //   };

  //   const imgSection = document.querySelectorAll('.move');
  //   const options = {
  //     threshold: Array.from({ length: 101 })
  //       .fill(1)
  //       .map((_, i) => i / 100)
  //   };
  //   const observer = new IntersectionObserver(callback, options);
  //   imgSection.forEach((move) => {
  //     observer.observe(move);
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <BaseLayout className={'homepage'}>
      <SectionHero></SectionHero>
      <section className='relative homepage-container'>
        <SectionYoutube></SectionYoutube>
        <SectionIntro></SectionIntro>
        <SectionLaunch></SectionLaunch>
        {/* <section className='text-center relative z-10 pt-0'>
          <Button type='primary'>Ready to Start? Contact Our Team.</Button>
        </section> */}
        <SectionParachains></SectionParachains>
        <SectionNetwork></SectionNetwork>
        <SectionProject></SectionProject>

        {/* <section className='text-center relative z-10 pt-0'>
          <Button type='primary'>Why Build a Parachain</Button>
        </section> */}
        {/* <SectionUtilization></SectionUtilization>
        <SectionSubstrate></SectionSubstrate>
        <SectionFlight></SectionFlight> */}
        {/* <section className='text-light'>
          <div className='container text-center'>
            <h2>Stay in the loop</h2>
            <p>Subscribe to the newsletter to hear about Kusama updates and events.</p>
            <Button type='primary'>Subscribe</Button>
            <p className='text-xs'>
              To see how we use your information please see our privacy policy.
            </p>
          </div>
        </section> */}
        <Partners></Partners>
      </section>
    </BaseLayout>
  );
}

export default HomePage;
