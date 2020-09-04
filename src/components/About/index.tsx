import React from 'react';

import { Container, Content } from './styles';

import Button from '../Button';

import imgAbout from '../../assets/welcome.png';

const About: React.FC = () => (
  <Container>
    <Content>
      <img src={imgAbout} alt="Quem são o O Chapeiro Delivery?" />
      <div>
        <h2>Sejá bem-vindo!</h2>
        <p>
          Venha comprar lanches com nós, confira as melhores novidades. Faça seu
          pedido em nosso próprio site, lembre de aceitar os termos antes de
          fazer seu pedido, todos os termos são necessário para fazer o pedido.
        </p>
        <Button type="submit">Encomendar</Button>
      </div>
    </Content>
  </Container>
);

export default About;
