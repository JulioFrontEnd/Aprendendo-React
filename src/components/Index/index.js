import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const Index = ()=>{
    return(
        
        <div>
            <h3 id='indexTitle'>MINHAS AULAS!, SEJA BEM VINDO(A)</h3>
            <div id='index'>
            <Link to='/helloworld'>01</Link>
            <Link to='/littlecomponent'>02</Link>
            <Link to='/starwars'>03</Link>
            <Link to='/prop'>04</Link>
            <Link to='/rtwrite'>05</Link>
            </div>
        </div>
    ); 
}

export default Index;