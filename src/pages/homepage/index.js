import NavHeader from '../../components/NavHeader/index.js';
import SectionHero from './SectionHero/index.js';
import './index.scss';
import SectionIntro from './SectionIntro/index.js';
import SectionLaunch from './SectionLaunch/index.js';

function HomePage() {
  return (
    <div className='homepage'>
      <NavHeader></NavHeader>
      <SectionHero></SectionHero>
      <section className='relative'>
        <SectionIntro></SectionIntro>
        <SectionLaunch></SectionLaunch>
      </section>
    </div>
  );
}

export default HomePage;
