import React from 'react';
import {Provider} from 'react-redux';
// My Modules
import './index.css';
import Video from './Video';
import Store from './reducer';
import MenuVideo from './Menu';
export default class MyFirstReduxTest extends React.Component{
    render(){
        return(
            <div className='videoPlayer'>
                <Provider store={Store}>
                    <Video />
                    <MenuVideo />
                </Provider>
            </div>
        );
    }
}