import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import logo from '../../assets/socialmidia/socialmidia.png';
import imgFacebook from '../../assets/socialmidia/facebook.png';
import imgWhatsapp from '../../assets/socialmidia/whatsapp.svg';

const Contacts: React.FC = () => (
  <Container>
    <Content>
      <div>
        <h2>Nosso Contatos!</h2>
        <p>
          Leia antes os termos de privacidade para que nada possa acontecer de
          desatendimento, lembre qualquer spam resulta em bloqueamento total do
          O Chapeiro. Sejá respeitoso com nossos atendentes e entregadores
          agradecemos se você seguir as regras.
        </p>
        <Link to="/facebook">
          <img
            className="redes-facebook"
            src={imgFacebook}
            alt="Logo Facebook"
          />
        </Link>
        <Link to="/whatsapp">
          <img
            className="redes-whatsapp"
            src={imgWhatsapp}
            alt="Logo Whatsapp"
          />
        </Link>
      </div>
      <img className="app-logo" src={logo} alt="Logo" />
    </Content>
  </Container>
);

export default Contacts;
