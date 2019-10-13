import styled, { keyframes } from 'styled-components';
import { accent } from '../../styles/tokens';

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }`;

export const Loading = styled.div`
  position: absolute;
  top: 50vh;
  left: 50vw;

  .outer,
  .middle,
  .inner {
    border: 3px solid transparent;
    border-top-color: ${accent};
    border-right-color: ${accent};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .outer {
    width: 3.5em;
    height: 3.5em;
    margin-left: -1.75em;
    margin-top: -1.75em;
    animation: ${spin} 2s linear infinite;
  }

  .middle {
    width: 2.1em;
    height: 2.1em;
    margin-left: -1.05em;
    margin-top: -1.05em;
    animation: ${spin} 1.75s linear reverse infinite;
  }

  .inner {
    width: 0.8em;
    height: 0.8em;
    margin-left: -0.4em;
    margin-top: -0.4em;
    animation: ${spin} 1.5s linear infinite;
  }
`;
