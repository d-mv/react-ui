import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Button from '../src/components/Button';
import THEME from '../src/styles/theme';

export default { title: 'Atoms' };

const mockFn = () => {};

export const Buttons = () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <ThemeProvider theme={THEME().light}>
      <Button color='primary' onClick={mockFn}>
        Primary
      </Button>
      <div style={{ marginInlineEnd: '1rem' }} />
      <Button color='secondary' onClick={mockFn}>
        Primary
      </Button>
      <Button color='error' onClick={mockFn}>
        Primary
      </Button>
    </ThemeProvider>
  </div>
);
