import styled from 'styled-components';

export const Container = styled.div`
  a {
    list-style: none;
    text-decoration: none;
  }
  header {
    height: 80px;
    background: #443838;
  }

  header .container {
    max-width: 1070px;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    -webkit-box-align: center;
    -webkit-box-pack: center;
  }

  header .container-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    -webkit-box-align: center;
    margin-right: 10px;
    padding-left: 30px;
  }

  header nav ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
  header nav li {
    font-weight: 600;
    text-transform: uppercase;
    padding: 15px;
  }

  header nav li a {
    color: white;
    text-decoration: none;
    list-style: none;
    opacity: 0.8;
  }

  header nav ul li a:hover {
    border-bottom: 2px solid #ff6600;
    padding-bottom: 3px;
    opacity: 1;
  }

  header .icones-menu {
    display: flex;
    align-items: center;
    -webkit-box-align: center;
    margin-left: 160px;
  }

  header .icone {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 18px;
    -webkit-box-pack: center;
    -webkit-box-align: center;
  }

  header .icones-menu .icone a {
    margin-right: 20px;
  }

  .button-join {
    border: none;
    outline: none;
    color: rgb(60 56 56);
    background: white;
    width: 100%;
    border-radius: 5px;
    padding: 12px 32px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    -webkit-text-decoration: none;
    text-decoration: none;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    max-width: 118px;
    margin-left: 250px;
  }

  @media (max-width: 1050px) {
    header .icones-menu {
      margin-left: 10px;
    }
  }

  @media (max-width: 970px) {
    header .icone {
      display: none;
    }
  }

  @media (max-width: 715px) {
    html {
      font-size: 50%;
    }
    header .container-menu {
      display: none;
    }
    /* ICONE RESPONSIVO */
    .one,
    .two,
    .three {
      background: white;
      height: 5px;
      width: 100%;
      margin: 6px auto;

      transition-duration: 0.3s;
    }
    .menu-toggle {
      width: 40px;
      height: 30px;
      justify-content: space-between;
    }

    /*fullscreen*/
    .open {
      position: absolute;
      top: 0;
      left: 0;

      width: 100vw;
      height: 100vh;

      z-index: 10;

      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(60 56 56);
    }

    .menu-section.open .menu-toggle {
      position: absolute;

      top: 20px;
    }

    .menu-section.open .menu-toggle .one {
      transform: rotate(45deg) translate(7px, 7px);
    }

    .menu-section.open .menu-toggle .two {
      opacity: 0;
    }

    .menu-section.open .menu-toggle .three {
      transform: rotate(-45deg) translate(8px, -9px);
    }

    .menu-section.open nav {
      display: block;
    }

    .menu-section.open nav ul {
      display: block;
      text-align: center;
    }

    .menu-section.open nav ul li {
      text-decoration: none;
      list-style: none;
    }

    .menu-section.open nav ul a {
      font-size: 3rem;
      line-height: 4rem;
      display: block;
    }
    .button-join {
      text-align: center;
      justify-content: center;
      margin-left: 60px;
    }
  }
`;
