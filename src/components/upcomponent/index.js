import React,{Component} from 'react';
import Temperature from './temperature';
import './style.css';

export default class Upcomponent extends Component{
    state = {
        temperature: 100,
        temperatureAlternative: 212,
        scale: 'f'
    };

    temperature = (value,converted,scale)=>{
        this.setState({temperature:value,temperatureAlternative:converted,scale:scale});
    }

    render(){
        return(
            <div>
                <div className='container-temperature'>
                    <Temperature valueConverted={this.temperature} scale='f' />
                    <Temperature valueConverted={this.temperature} scale='c' />
                </div>

                <div>
                    {(this.state.scale==='f')?'Escala em Fahrenheit':'Escala em Celcius'}<br/>
                    VALOR: {this.state.temperature}<br/>
                    CONVERTIDO: {this.state.temperatureAlternative}<br/>
                </div>
            </div>
        );
    }
}