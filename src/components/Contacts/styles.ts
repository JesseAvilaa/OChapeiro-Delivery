import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 0px;
  background: #443838;
  height: 825px;
`;

export const Content = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .redes-facebook {
    margin-left: -15px;
    width: 200px;
    @media only screen and (max-width: 960px) {
      margin-left: 0px;
      width: 200px;
      padding-top: 0px;
    }
  }

  .redes-whatsapp {
    margin-left: 14px;
    width: 183px;
    @media only screen and (max-width: 960px) {
      margin-left: 0px;
      width: 183px;
      padding-top: 20px;
    }
  }

  .app-logo {
    margin-top: 121px;
    width: 605px;
    margin-right: -100px;
    @media only screen and (max-width: 960px) {
      display: none;
    }
  }

  button:hover {
    filter: brightness(99%);
  }

  @media only screen and (max-width: 1160px) {
    flex-direction: column;
  }

  div {
    margin-top: 85px;
    max-width: 520px;
    padding-left: 121px;
    text-align: center;

    @media only screen and (max-width: 1160px) {
      margin-top: 64px;
      height: 343px;
    }
    @media only screen and (max-width: 960px) {
      margin-top: 85px;
      max-width: 517px;
      padding-left: 0px;
    }
  }

  div h2 {
    color: #ff7b00;
    font-size: 48px;
    max-width: 488px;
    margin-bottom: 40px;
    font-weight: bold;

    @media only screen and (max-width: 960px) {
      font-size: 32px;
    }
  }

  div p {
    line-height: 1.5;
    font-size: 18px;

    @media only screen and (max-width: 640px) {
      font-size: 15px;
    }
    @media only screen and (max-width: 960px) {
      margin-left: -10px;
    }
  }

  div p:first-of-type {
    color: white;
  }

  div p:not(:last-child) {
    margin-bottom: 40px;
  }
`;
