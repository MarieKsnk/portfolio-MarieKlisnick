import React from 'react';
import Header from '../globals_components/Header/Header';
import Footer from '../globals_components/Footer/Footer';
import './MainLayout.scss';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
