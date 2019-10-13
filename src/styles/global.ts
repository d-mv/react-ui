import { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';
import { black } from './tokens';

WebFont.load({
  google: {
    families: ['Roboto Sans:300,300i,400,700', 'Open+Sans:300,400', 'IBM+Plex+Mono'],
  },
});

const Global = createGlobalStyle`
  :root {
    font-size: 62.5%;
  font-family: Roboto Sans;
  }
  html {
    scroll-behavior: smooth;
    -moz-osx-font-smoothing: grayscale;
    color: ${black};
  }
  body{
    margin:0;
  }
`;
export default Global;
