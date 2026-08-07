import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import KaosCommandCenter from './kaos/KaosCommandCenter';
import RouteTransitionManager from './components/RouteTransitionManager';
import './index.css';
import './styles/wnyhsVisualGovernance.css';

const isKaosRoute = window.location.pathname === '/kaos' || window.location.pathname.startsWith('/kaos/');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteTransitionManager />
      {isKaosRoute ? <KaosCommandCenter /> : <App />}
    </BrowserRouter>
  </React.StrictMode>
);
