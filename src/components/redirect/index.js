import React,{Component} from 'react';

export default class Redirect extends Component{
    render(){
        return(
            <div>
                <h2>Direcionando para...</h2>
                <h3>{this.props.link}</h3>
                {setTimeout(()=>window.location.href = this.props.link,5000)}
                
            </div>
        );
    }
}