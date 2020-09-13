import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import Foolter from './component/foolter';
import Header from './component/header';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Foolter/>
    </div>
  );
}

export default App;
