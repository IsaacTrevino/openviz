import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot as Recoil } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <Recoil>
      <App/>
    </Recoil>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
