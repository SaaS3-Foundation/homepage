import Logo from '@/static/img/logo/title-logo.png';
import './index.less';
import { useRef, useState } from 'react';
import { Button } from 'antd';

function NavHeader() {
  const navs = [
    {
      title: 'Overview',
      href: '/'
    },
    {
      title: 'WhitePaper',
      href: process.env.REACT_APP_WHITE_PAPER_LINK,
      blank: true
    },
    {
      title: 'Marketplace',
      href: '/marketplace'
    },
    {
      title: 'Launchpad',
      href: 'https://launchpad.saas3.io/',
      blank: true
    },
    {
      title: 'Airdrop',
      href: 'https://airdrop.saas3.io/',
      blank: true
    },
    // {
    //   title: 'Documents',
    //   href: 'https://docs.saas3.io/',
    //   blank: true
    // },
    {
      title: 'Faucet',
      href: '/faucet'
    }
  ];

  const [visible, setVisible] = useState(false);
  const navBar = useRef();

  const toggleNavList = () => {
    setVisible(!visible);
  };
  return (
    <header className='nav-header z-20'>
      <nav className='py-16px'>
        <div className='container flex items-center px-3 flex-wrap'>
          <a href='/' className='shrink-0'>
            <img src={Logo} alt='Logo' className='logo w-auto' />
          </a>
          <button
            className='navbar-toggler ml-auto p-1 rounded hidden md:block'
            onClick={toggleNavList}
          >
            <span className='navbar-toggler-icon block w-7 h-7'></span>
          </button>
          <div
            className={`md:w-full navbar-collapse ml-auto md:max-h-0 items-center md:text-center lg:flex lg:w-auto ${
              visible ? 'show' : ''
            }`}
            ref={navBar}
          >
            <ul className='navbar-navs block lg:flex items-center'>
              {navs.map((nav) => {
                return (
                  <li key={nav.title} className='md:text-center py-2'>
                    <a
                      className='px-2.5 text-base text-white opacity-50 hover:opacity-100 hover:text-white transition-opacity duration-300 cursor-pointer'
                      href={nav.href}
                      target={nav.blank && '_blank'}
                    >
                      {nav.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <Button
              className='text-base py-2 px-4 h-auto'
              type='primary'
              href='https://docs.saas3.io/'
              target='_blank'
              ghost
            >
              Start to Build
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavHeader;
