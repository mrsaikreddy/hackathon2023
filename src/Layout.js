import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div className="layout">
    <NavBar/>
      <Sidebar />
      <MainContent />
      
    </div>
  );
}

export default Layout;