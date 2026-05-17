import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import RouteTransitionManager from './components/RouteTransitionManager';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteTransitionManager />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
