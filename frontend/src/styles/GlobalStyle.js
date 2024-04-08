import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    list-style-type: none;
    list-style: none;
  }
  :root{
    --primary-color: #17161E;
    --secondary-color: #1F1E26;
    --color-red: #470808;
    --color-red-light: #E12121;
    --color-green: #68EE76;
    --color-green-light: #99FFA3;
    --color-blue: #151353;
    --color-blue-light: #20208F;
    --color-white: #F9F6FF;
    --color-white-dark: #F4F0FF;
  }
  body{
    font-family: "Poppins", sans-serif;
    background: var(--primary-color);
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    overflow: hidden;
    color: var(--color-white);
  }
  .italic__text{
    font-family: "Poppins", sans-serif;
    font-style: italic;
  }

`