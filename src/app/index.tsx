import React, { useState, useLayoutEffect } from 'react';
import { CssBaseline, Theme, useMediaQuery } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import Button from '../components/Button';
import ButtonsLine, { ButtonsLineProps } from '../components/ButtonsLine';
import Input from '../components/Input'

import THEME from '../styles/material/theme';
import Global from '../styles/global';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(THEME().light);

  const prefersDark = useMediaQuery('(prefers-color-scheme:dark)');

  useLayoutEffect(() => {
    const { type } = theme.palette;
    if (prefersDark && theme && type === 'light') setTheme(THEME().dark);
    if (!prefersDark && theme && type === 'dark') setTheme(THEME().light);
  }, [prefersDark, theme]);

  const buttonsProps: ButtonsLineProps = {
    buttons: [
      <Button key={0} onClick={() => {}} title='HELLO' />,
      <Button key={1} secondary onClick={() => {}} title='HELLO AGAIN' />,
    ],
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Global />
      <ButtonsLine {...buttonsProps} />
      <Input label='label' placeholder='placeholder' value='' />
      <br></br>
      <Input password label='label' placeholder='placeholder' value='1' />
    </ThemeProvider>
  );
};

export default App;
