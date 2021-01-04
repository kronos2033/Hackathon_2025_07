import React from 'react';
import ReactDOM from 'react-dom';
import './pages/index.css';
import './pages/initiation.css';
import './pages/choose.css';
import './pages/result.css';
import './pages/profile.css';
import './pages/header.css';
import App from './components/App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

