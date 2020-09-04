import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;900&display=swap');

  * {
    margin: 0px;
    padding: 0px;
  }
  .container-geral {
    width: 90%;
    max-width: 970px;
  }

  html {
    /*a cada 1rem sera condiderado 10px*/
    font-size: 62.5%;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.6rem; /*padrao 16px*/
  }

  a {
    list-style: none;
    text-decoration: none;
  }
`;
