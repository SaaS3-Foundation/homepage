import { useEffect, useState } from 'react';
import gif from '../../../static/img/homepage/homepage-gif.gif';
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
        <img src={gif} alt='homepage img' />
        <div className='sec-content absolute'>
          <h1 className='text-white text-4xl md:text-xl font-bold'>PARACHAINS ARE HERE</h1>
        </div>
        <button className='text-primary absolute border border-primary border-solid py-2 px-4 md:p-2 text-lg'>
          Learn more
        </button>
      </div>
    </section>
  );
}

export default SectionHero;
