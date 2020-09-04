import React, { useCallback, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => {
  const handleMenu = useCallback(() => {
    let show = true;
    const menuSection = document.querySelector('.menu-section');
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle?.addEventListener('click', () => {
      document.body.style.overflow = show ? 'hidden' : 'initial';

      menuSection?.classList.toggle('open', show);
      show = !show;
    });
  }, []);

  const handleMenuNav = useCallback(() => {
    document.body.style.overflow = 'initial';
  }, []);

  useEffect(() => {
    handleMenu();
  });

  return (
    <Container>
      <header>
        <div className="container">
          <div className="menu-section">
            <div className="menu-toggle">
              <div className="one" />
              <div className="two" />
              <div className="three" />
            </div>

            <nav className="container-menu">
              <ul>
                <li>
                  <Link to="/" onClick={handleMenuNav}>
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/foods" onClick={handleMenuNav}>
                    Lanches
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={handleMenuNav}>
                    Contato
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={handleMenuNav}>
                    Delivery
                  </Link>
                </li>
              </ul>

              <div className="icones-menu">
                <Link to="/" className="button-join">
                  Entrar
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;
