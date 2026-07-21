import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/location-pages.css';
import App from './App';
import LocationsIndex from './pages/LocationsIndex';
import LocationPage from './pages/LocationPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/driving-instructors" element={<LocationsIndex />} />
          <Route path="/driving-instructors/:slug" element={<LocationPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();