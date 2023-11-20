import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import App from './App'
import Banner  from './Banner';
import Client from './client';
import About from './About';
import Accord from './Accord';

import Service from './Service';
import Portfolio from './Portfolio';
import Teams from './Teams';
import Pricing from './Pricing';
import Contact from './Contact';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
    <Banner />
    <Client />
    <About />
    <Accord />
  
    <Service />
    <Portfolio />
    <Teams />
    <Pricing />
    <Contact />
    <Footer />
  
   
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
