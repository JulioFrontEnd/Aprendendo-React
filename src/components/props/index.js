import React,{Component} from 'react';
import './index.css';
export default class Prop extends Component{
    state = {
        time: new Date().toLocaleTimeString(),
    }
    componentWillMount(){
        this.reloading();
    }
    reloading = ()=>{
        setInterval(()=>{
            this.setState({time:new Date().toLocaleTimeString()});
        },1000);
    }
    render(){   
        return(
            <div className='mainDate'>
                <h1>Olá, seja bem-vindo!</h1>
                <h2>São agora: {this.state.time}</h2>
            </div>
        );
    }
}

