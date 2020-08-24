import React, { useEffect, useState } from 'react';
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
import { useRecoilValue } from 'recoil';
import { darkMode } from './recoil';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);


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
  const isDarkMode = useRecoilValue(darkMode);

  return (
    <ThemeProvider theme={createTheme(isDarkMode)}>
      <StylesProvider jss={jss}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router>
            <Routes/>
          </Router>
        </MuiPickersUtilsProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
