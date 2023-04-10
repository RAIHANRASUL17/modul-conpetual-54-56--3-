import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
<>
<Header></Header>
<Outlet></Outlet>
<Footer></Footer>
</>
  );
};

export default App;
