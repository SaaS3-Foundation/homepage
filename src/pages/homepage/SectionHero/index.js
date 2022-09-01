import { useEffect, useState } from 'react';
import gif from '../../../static/img/homepage/home-gif.png';
import Button from '../../../components/comm/Button';
import './index.scss';

function SectionHero() {
  const docElem = document.documentElement;
  const body = document.body;
  const [zoom, setZoom] = useState(false);

  function listenerScroll() {
    const scrollPos = body.scrollTop || docElem.scrollTop;
    const ret = scrollPos > 10;
    if (ret !== zoom) {
      setZoom(ret);
    }
  }

  useEffect(() => {
    listenerScroll();
    window.addEventListener('scroll', listenerScroll);
    return () => {
      window.removeEventListener('scroll', listenerScroll);
    };
  });

  return (
    <section className={`section-hero pt-40 md:pt-72 h-screen`}>
      <div className={`container relative  ${zoom ? 'zoom' : ''}`}>
        <div className='img-wrap'>
          <img src={gif} alt='homepage img' className=' mx-auto' />
        </div>
        <div className='sec-content absolute'>
          <h1 className='text-white text-4xl md:text-xl font-bold'>PARACHAINS ARE HERE</h1>
        </div>
        {/* <button className='text-primary absolute border border-primary border-solid py-2 px-4 md:p-2 text-lg'>
          Learn more
        </button> */}
        <Button type="info">Learn more</Button>
      </div>
    </section>
  );
}

export default SectionHero;
