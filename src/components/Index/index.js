import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const Index = ()=>{
    return(
        
        <div className='Main-Content'>
            <h3 id='indexTitle'>MINHAS AULAS!, SEJA BEM VINDO(A)</h3>
            <div id='index'>
            <Link to='/helloworld'>01</Link>
            <Link to='/littlecomponent'>02</Link>
            <Link to='/starwars'>03</Link>
            <Link to='/prop'>04</Link>
            <Link to='/rtwrite'>05</Link>
            <Link to='/componentboss'>06</Link>
            <Link to='/videocenter'>07</Link>
            <Link to='/apiLearning'>(8) API (laravel request)</Link>
            <Link to='/animation'>Animation Lab</Link>

            </div>
        </div>
    ); 
}

export default Index;