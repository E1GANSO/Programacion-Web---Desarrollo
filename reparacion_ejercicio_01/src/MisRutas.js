import React from "react";
import {Route, Switch} from 'react-router-dom'
import Store from './pages/Store'
import About from './pages/About'
import ListCart from "./pages/ListCart";

export default function MisRoutes(){
    return(
        <Switch>
             <Route exact path='/' component = {Store}/>
             <Route exact path='/About' component = {About}/>
             <Route exact path='/ListCart' component ={ListCart}/>
        </Switch>
    );
}