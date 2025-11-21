import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import your pages
import Home from './Pages/Home.jsx';
import Predict from './Pages/Predict.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 👇 Default route */}
        <Route path="/" element={<Home />} />

        {/* 👇 This renders Predict page when you visit /predict */}
        <Route path="/predict" element={<Predict />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
