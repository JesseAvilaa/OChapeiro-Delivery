import styled from 'styled-components';

export const Container = styled.section`
  background-color: #121214;

  footer {
    background-color: #202024;
    width: 100%;
    display: flex;
    margin-top: 0px;

    > div {
      display: flex;
      justify-content: space-between;
      max-width: 1160px;
      width: 100%;
      margin: 0 auto;
      padding: 24px 20px 24px 20px;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 500px;
        width: 100%;

        @media only screen and (max-width: 960px) {
          align-items: flex-start;
          max-width: 160px;
        }

        @media only screen and (max-width: 960px) {
          flex-direction: column;
        }

        a {
          color: #ff7b00;
          font-size: 14px;
          text-decoration: none;

          @media only screen and (max-width: 960px) {
            margin-top: 10px;
          }
        }
      }

      div:first-of-type {
        justify-content: space-between;
        max-width: 404px;
        width: 100%;

        @media only screen and (max-width: 960px) {
          max-width: 120px;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }
`;
