import './index.less';
import { Button } from 'antd';
import { useEffect, useRef, useState } from 'react';
function CookieModal() {
  const [cookieType, setCookieType] = useState(localStorage.getItem('cookieType'));
  const [height, setHeight] = useState(0);
  const modalContent = useRef();

  const _setCookieType = (type) => {
    localStorage.setItem('cookieType', type);
    setCookieType(localStorage.getItem('cookieType'));
  };
  useEffect(() => {
    if (modalContent && !cookieType && window.screen.width <= 1023) {
      setHeight(modalContent.current.clientHeight - 2);
    }
  }, [modalContent, cookieType]);

  return (
    <>
      {!cookieType ? (
        <div className='cookie-modal' style={{ height: height + 'px' }}>
          <div
            className='modal-content fixed bottom-16px right-16px p-16px pc:rounded-md md:bottom-0 md:right-0 md:left-0 z-50'
            ref={modalContent}
          >
            <p className='text-white text-base'>
              By browsing this website, you are allowing cookies from third-party services.
            </p>

            <div className='flex items-center mt-16px'>
              <Button type='primary' onClick={() => _setCookieType('all')}>
                Accept all cookies
              </Button>
              <Button
                type='primary'
                className='ml-16px'
                onClick={() => _setCookieType('onlyEssential')}
              >
                Only essential ones
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CookieModal;
