import React,{Component} from 'react';

export default class Prop extends Component{
    render(){
        return(

            <div>
                <h1>Olá, seja bem-vindo!</h1>
                <h2>São agora: {this.props.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

