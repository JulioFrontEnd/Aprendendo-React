import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Index from './components/Index';
import App from './App.js';
import Starwars from './components/starwars';
import LittleComponent from './components/LittleComponent';
import DetailSW from './components/DetailSW';
import Prop from './components/props';
import RtWrite from './components/rtWrite';
import Upcomponent from './components/upcomponent/';
import Menu from './components/menu';
const Routes = ()=>{
    return(
        
        <BrowserRouter>
            <Switch>
                <Route path="/" render={props=><Menu {...props} color='primary'/>}/>
            </Switch>
            <Switch>
                {/* ROTAS DO INDEX */}
                <Route exact path="/" component={Index} />
                <Route exact path="/starwars" component={Starwars} />

                <Route path="/helloworld" component={App} />
                <Route path="/littlecomponent" component={LittleComponent} />
                <Route path='/prop' component={Prop} />
                <Route path='/rtwrite' component={RtWrite} />
                <Route path='/componentboss' component={Upcomponent} />
                {/* Subrotas do path='starwars' */}
                <Route path='/starwars/detail/:id' component={DetailSW}/>
            </Switch>
        </BrowserRouter>
    );  
}
export default Routes;