import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import KioskReservationPage from "./pages/KioskReservationPage";
import KioskRegisterPage from "./pages/KioskRegisterPage";
import KioskDeletePage from "./pages/KioskDeletePage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="kiosk/register" element={<KioskRegisterPage />} />
          <Route path="kiosk/delete" element={<KioskDeletePage />} />
          <Route path="kiosk/reservation" element={<KioskReservationPage />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
