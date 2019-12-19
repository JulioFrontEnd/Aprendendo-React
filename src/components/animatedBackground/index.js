import React, { Component } from 'react';
import './index.css';

export default class animatedBackground extends Component{
    render(){
        return(
            <div className='bg-body'>
                <div className='textbox'>
                    <h1>ANIMATED BACKGROUND</h1>
                    <p>_________________________________________</p>
                    <p className='content'>IN THIS CLASS I HAVE TO TEST A BACKGROUND ANIMATED.</p>
                </div>
                <div className='blackground'></div>
            </div>
        );
    }
}