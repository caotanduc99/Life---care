import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './component/home';
import Foolter from './component/foolter';
import Header from './component/header';
import {BrowserRouter} from 'react-router-dom'
import Login from './component/Login';
import DefaultLayout from './container/defaultlayout';

function App() {
  return (
     <BrowserRouter>
     {/*  <div>
      <Header/>
      <Home/>
       <Foolter/>
     </div>  */}
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/' component={DefaultLayout}/>
        <DefaultLayout/>
      </Switch>
     </BrowserRouter>
    
  );  
}

export default App;
