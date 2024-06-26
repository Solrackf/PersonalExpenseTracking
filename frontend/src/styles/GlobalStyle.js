import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    list-style-type: none;
    list-style: none;
    line-height: 1;
  }
  ::before{
    margin: 0;
    padding: 0;
  }
  :root{
    --primary-color: #17161E;
    --secondary-color: #1F1E26;
    --color-red: #470808;
    --color-red-light: #FF7A65;
    --color-green: #68EE76;
    --color-green-light: #CCFA81;
    --color-blue: #151353;
    --color-blue-light: #4CB1EB;
    --color-white: #F9F6FF;
    --color-white-dark: #F4F0FF;
  }
  body{
    font-family: "Poppins", sans-serif;
    background: var(--primary-color);
    font-size: clamp(1rem, 1vw, 1.2rem);
    overflow-x: hidden;
    color: var(--color-white);
  }
  .italic__text{
    font-family: "Poppins", sans-serif;
    font-style: italic;
  }
  .text__100{
    font-weight: 100;
  }
  .text__200{
    font-weight: 200;
  }
  .text__300{
    font-weight: 300;
  }
  .text__900{
    font-weight: 900;
  }
  .text__400{
    font-weight: 400;
  }
  .text__500{
    font-weight: 500;
  }
  .text__600{
    font-weight: 600;
  }
  .text__700{
    font-weight: 700;
  }
  .text__800{
    font-weight: 800;
  }

`