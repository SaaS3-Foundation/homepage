import Partners from '@c/comm/Partners/index.jsx';
import SectionHero from './SectionHero/index.jsx';
import SectionIntro from './SectionIntro/index.jsx';
import SectionLaunch from './SectionLaunch/index.jsx';
import SectionProject from './SectionProject/index.jsx';
import SectionNetwork from './SectionNetwork/index.jsx';
import SectionParachains from './SectionParachains/index.jsx';
import SectionYoutube from './SectionYoutube/index.jsx';
import { StyledBaseLayout } from './styled.js';

function HomePage() {
  return (
    <StyledBaseLayout className="homepage">
      <SectionHero />
      <section className="relative homepage-container">
        <SectionYoutube />
        <SectionIntro />
        <SectionLaunch />
        {/* <section className='text-center relative z-10 pt-0'>
          <Button type='primary'>Ready to Start? Contact Our Team.</Button>
        </section> */}
        <SectionParachains />
        <SectionNetwork />
        <SectionProject />

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
        <Partners />
      </section>
    </StyledBaseLayout>
  );
}

export default HomePage;
