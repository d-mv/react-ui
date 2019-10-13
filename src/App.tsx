import React, { useState, useLayoutEffect } from 'react';
import { CssBaseline, Theme, useMediaQuery } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import THEME from './styles/material/theme';
import Global from './styles/global';

import Routes from './Routes';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(THEME().light);

  const prefersDark = useMediaQuery('(prefers-color-scheme:dark)');

  useLayoutEffect(() => {
    const { type } = theme.palette;
    if (prefersDark && theme && type === 'light') setTheme(THEME().dark);
    if (!prefersDark && theme && type === 'dark') setTheme(THEME().light);
  }, [prefersDark, theme]);

  // const buttonsProps: ButtonsLineProps = {
  //   buttons: [
  //     <Button key={0} onClick={() => {}} title='HELLO' />,
  //     <Button key={1} secondary onClick={() => {}} title='HELLO AGAIN' />,
  //   ],
  // };

  const Header = () => <div>this is header</div>;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Global />
        <Header />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
