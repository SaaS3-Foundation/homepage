import { Button } from '@douyinfe/semi-ui';
import { useEffect, useRef, useState } from 'react';
import { StyledCookieModal } from './styled';

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

  return !cookieType ? (
    <StyledCookieModal className="cookie-modal" style={{ height: `${height}px` }}>
      <div
        className="modal-content fixed bottom-16px right-16px p-16px pc:rounded-md md:bottom-0 md:right-0 md:left-0 z-50"
        ref={modalContent}
      >
        <p className="text-white text-base">
          By browsing this website, you are allowing cookies from third-party services.
        </p>

        <div className="flex items-center mt-16px">
          <Button className="bg-transparent !border !border-primary flex-1" onClick={() => _setCookieType('all')}>
            Accept all cookies
          </Button>
          <Button
            className="bg-transparent !border !border-primary ml-16px flex-1"
            onClick={() => _setCookieType('onlyEssential')}
          >
            Only essential ones
          </Button>
        </div>
      </div>
    </StyledCookieModal>
  ) : null;
}

export default CookieModal;
