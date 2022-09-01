import { EnvironmentFilled } from '@ant-design/icons';
import ContactBar from '../../Contact';
import './index.scss';
function Footer() {
  return (
    <footer className='footer-wrap'>
      <div className='container'>
        <div className='contact-wrap text-center'>
          <ContactBar></ContactBar>
          <div className='address-wrap text-center'>
            <a
              className='hover:text-primary'
              href='https://goo.gl/maps/L4vicaLurYULHQ8Z6'
              target='_blank'
              rel='noreferrer'
            >
              <EnvironmentFilled className='align-middle' />
              71 Nanyang Dr, NTU Innovation Center, Singapore 638075
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
