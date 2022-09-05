import SectionHero from './SectionHero/index.js';
import './index.scss';
import SectionIntro from './SectionIntro/index.js';
import SectionLaunch from './SectionLaunch/index.js';
import SectionProject from './SectionProject/index.js';
import SectionNetwork from './SectionNetwork/index.js';
import SectionParachains from './SectionParachains/index.js';
import SectionYoutube from './SectionYoutube/index.js';
import Partners from '../../components/comm/Partners/index.js';
import BaseLayout from '../../components/comm/layout/BaseLayout/index.js';

function HomePage() {
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
