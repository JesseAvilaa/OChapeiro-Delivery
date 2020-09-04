import React from 'react';

import { Container, Content } from './styles';

const Foods: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <div className="food-1">
            <h2>Xis Carne $14,00</h2>
            <p>Pão, maionese, milho, tomate, alface, ovo, hambúguer, queijo.</p>
          </div>
          <div className="food-2">
            <h2>Xis Calabresa $15,00</h2>
            <p>
              Pão, maionese, milho, tomate, alface, ovo, hambúguer, calabresa,
              queijo.
            </p>
          </div>
          <div className="food-3">
            <h2>Xis Bacon $16,00</h2>
            <p>
              Pão, maionese, milho, tomate, alface, ovo, hambúguer, bacon,
              queijo.
            </p>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Foods;
