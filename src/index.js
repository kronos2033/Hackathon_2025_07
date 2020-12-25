import React from 'react';
import ReactDOM from 'react-dom';
import './pages/index.css';
import './pages/initiation.css';
import './pages/choose.css';
import './pages/result.css';
import './pages/profile.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

