import { useEffect, useState } from 'react';
import gif from '@/static/img/homepage/home-gif.png';
import { Button } from 'antd';
import './index.less';

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

  function handerMore(event) {
    window.scrollTo({
      top: window.outerHeight - 200
    });
    // document.querySelector('#root').scrollTop = window.outerHeight;
  }

  return (
    <section className={`section-hero`}>
      <div className={`container relative h-full pt-40 ${zoom ? 'zoom' : ''}`}>
        <div className='img-wrap'>
          <img src={gif} alt='homepage img' className='mx-auto opacity-80' />
        </div>
        <div className='sec-content absolute'>
          <h1 className='text-white text-4xl md:text-xl font-bold'>
            The Next-Gen Software as a Service
          </h1>
        </div>
        <Button onClick={handerMore} className='absolute left-1/2 bottom-20 -translate-x-1/2' ghost>
          Learn more
        </Button>
      </div>
    </section>
  );
}

export default SectionHero;
