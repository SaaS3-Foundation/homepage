import Logo from '../../static/img/logo/title-logo.png';
import NavToggler from '../../static/img/header/nav-toggler.svg';
import './index.scss';
import { useEffect, useRef, useState } from 'react';

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
    {
      title: 'Documents',
      href: 'https://docs.saas3.io/',
      blank: true
    },
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
            <img src={Logo} alt='Logo' className='logo h-9 w-auto' />
          </a>
          <button className='navbar-toggler ml-auto p-1 rounded hidden md:block' onClick={toggleNavList}>
            <span className='navbar-toggler-icon block w-7 h-7'></span>
          </button>
          <div className={`navbar-collapse ml-auto md:max-h-0 lg:block w-full lg:w-auto ${visible ? 'show' : ''}`} ref={navBar}>
            <ul className='navbar-navs block lg:flex items-center'>
              {navs.map((nav) => {
                return (
                  <li key={nav.title} className="md:text-center py-2">
                    <a
                      className='px-2.5 text-lg opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer'
                      href={nav.href}
                      target={nav.blank && '_blank'}
                    >
                      {nav.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavHeader;
