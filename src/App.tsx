import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  createStyles,
  jssPreset,
  makeStyles,
  StylesProvider,
  ThemeProvider
} from '@material-ui/core';
import { create } from 'jss';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { createTheme } from './theme';
import Routes from './Routes';
import { useQuery } from '@apollo/client';
import { IS_DARK_MODE } from './apollo/queries';


const jss = create({ plugins: [...jssPreset().plugins] });

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%',
    },
    body: {
      height: '100%',
      width: '100%'
    },
    '#root': {
      height: '100%',
      width: '100%'
    }
  }
}));



function App() {
  useStyles();
  const { data } = useQuery(IS_DARK_MODE);

  return (
    <ThemeProvider theme={createTheme(data.darkMode)}>
      <StylesProvider jss={jss}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Router>
              <Routes />
            </Router>
        </MuiPickersUtilsProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
