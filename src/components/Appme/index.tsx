import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import imgApp from '../../assets/app/app-mobile.png';
import imgGooglePlay from '../../assets/app/googleplay.png';
import imgAppStore from '../../assets/app/appstore.png';

const Appme: React.FC = () => (
  <Container>
    <Content>
      <div>
        <h2>Nosso Aplicativo</h2>
        <p>
          Utilize nosso aplicativo para fazer seu pedido rápido é fácil lembre
          de aceitar os termos antes de utilizar ele, você também pode fazer seu
          pedido pelo store-ochapeiro.cf e faça seu pedido sem problemas,
          enquanto nosso aplicativo não está disponível utilize o
          Chapeiro-Store. Nosso aplicativo está disponível em duas plataformas
          Google Play e App Store. Faça o download clicando nos icones ao lado.
        </p>
        <Link to="/baixar-googleplay">
          <img
            className="downloads-googleplay"
            src={imgGooglePlay}
            alt="Google Play"
          />
        </Link>
        <Link to="/baixar-appstore">
          <img
            className="downloads-appstore"
            src={imgAppStore}
            alt="App Store"
          />
        </Link>
      </div>
      <img className="app-logo" src={imgApp} alt="App Logo" />
    </Content>
  </Container>
);

export default Appme;
