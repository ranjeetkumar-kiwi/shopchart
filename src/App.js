import React from 'react';
import './assets/scss/globle.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/header/Footer';
const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
