import { useEffect, useState } from 'react';
import { Button } from '@douyinfe/semi-ui';
import gif from '@/static/img/homepage/home-gif.png';
import { Box } from './styled';

function SectionHero() {
  const docElem = document.documentElement;
  const { body } = document;
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

  const handerMore = () => {
    window.scrollTo({
      top: window.outerHeight - 200,
    });
  };

  return (
    <Box className="section-hero">
      <div className={`container relative h-full pt-40 ${zoom ? 'zoom' : ''}`}>
        <div className="img-wrap PositionCenter">
          <img src={gif} alt="homepage img" className="mx-auto opacity-80" />
        </div>
        <div className="sec-content absolute">
          <h1 className="TitleFont text-white text-4xl md:text-xl font-bold">
            The Next-Gen Software as a Service
          </h1>
        </div>
        <Button
          onClick={handerMore}
          className="md:!bottom-[200px]"
          theme="borderless"
        >
          Learn more
        </Button>
      </div>
    </Box>
  );
}

export default SectionHero;
