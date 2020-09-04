import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 0px;
  background: #443838;
  height: 668px;
`;

export const Content = styled.div`
  max-width: 1160px;
  background: #443838;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-top: 238px;
    width: 360px;
    @media only screen and (max-width: 960px) {
      margin-top: 59px;
      width: 308px;
    }
  }

  button {
    width: 50%;
    height: 60px;
    background: #fbb403;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
  }

  button:hover {
    filter: brightness(99%);
  }

  @media only screen and (max-width: 1160px) {
    flex-direction: column;
  }

  div {
    margin-top: 250px;
    max-width: 520px;

    @media only screen and (max-width: 1160px) {
      margin-top: 64px;
      height: 343px;
    }
    @media only screen and (max-width: 960px) {
      margin-top: 28px;
      height: 346px;
    }
  }

  div h2 {
    color: #ffbf80;
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
  }

  div p:first-of-type {
    color: #a8a8b3;
  }

  div p:not(:last-child) {
    margin-bottom: 40px;
  }
`;
