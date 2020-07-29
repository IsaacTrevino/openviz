import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import Layers from './layers';
import {
  createStyles,
  jssPreset,
  makeStyles,
  StylesProvider,
  ThemeProvider
} from '@material-ui/core';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});



function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <header className='App-header'>
          <h3>
            OpenViz
          </h3>
          <Layers/>
        </header>
      </div>

    </ApolloProvider>
  );
}

export default App;
