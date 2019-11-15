import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Prop from './components/props';
const RRoutes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/prop' render={(props)=> <Prop date={new Date()} />} />
            </Switch>
        </BrowserRouter>
    );  
}
export default RRoutes;