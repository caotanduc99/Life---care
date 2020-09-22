import React, {Component}from 'react';
import Header from '../component/header';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';
import Foolter from '../component/foolter';
import Home from '../component/home';

 


class DefaultLayout extends Component{
    render(){
        return(
            <div>
                <Header/>
                {/* <Home/> */}
                <Switch>
                
                    {routes.map((route, idx)=>{
                        return route.component ? (
                            <Route path={route.path} 
                            exact={route.exact} 
                            name={route.name} 
                            component={route.component}/>
                        ):null;
                    })
                    }
                
                </Switch>
                <Foolter/>
            
            </div>
            
        );
    }
}
export default DefaultLayout;