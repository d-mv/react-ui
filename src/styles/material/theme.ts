import { createMuiTheme } from '@material-ui/core/styles';
import { grey, blueGrey } from '@material-ui/core/colors';
import { typography } from './typography';

const theme = () => {
  const light = createMuiTheme({
    palette: {
      type: 'light',
      primary: { main: blueGrey[800], dark: blueGrey[900], light: blueGrey[400] },
      secondary: { main: grey[100], dark: grey[300], light: grey[100] },
    },
    typography: {
      ...typography,
    },
  });

  const dark = createMuiTheme({
    palette: {
      type: 'dark',
      primary: { ...light.palette.primary },
    },
    typography: {
      ...typography,
    },
  });
  return { light, dark };
};

export default theme;
