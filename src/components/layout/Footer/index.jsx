import { IconMapPin } from '@douyinfe/semi-icons';
import ContactBar from '../../comm/Contact';
import { FootWrap } from './styled';

function Footer() {
  return (
    <FootWrap className="footer-wrap">
      <div className="container">
        <div className="contact-wrap text-center">
          <ContactBar />
          <div className="address-wrap text-center">
            <a
              className="hover:text-primary"
              href="https://goo.gl/maps/L4vicaLurYULHQ8Z6"
              target="_blank"
              rel="noreferrer"
            >
              {/* <EnvironmentFilled className="align-middle" /> */}
              <IconMapPin className="align-middle mr-1" />
              71 Nanyang Dr, NTU Innovation Center, Singapore 638075
            </a>
          </div>
        </div>
      </div>
    </FootWrap>
  );
}

export default Footer;
