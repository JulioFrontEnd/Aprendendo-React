import React,{Component} from 'react';

export default class Temperature extends Component{

    



    celciusConvert = (t)=>{
        return (t - 32) * 5 / 9;
    }
    fahrenheitConvert = (t)=>{
        return (t * 9 / 5) + 32;
    }

    crateConvertions = (v)=>{
        if(this.props.scale === 'f'){
            return this.celciusConvert(v);
        }else{
            return this.fahrenheitConvert(v);
        }
    }

    handleChange = async (event)=>{
        let firstValue = Number(event.target.value);
        let convertedValue = await this.crateConvertions(firstValue);
        this.props.valueConverted(firstValue, parseFloat(convertedValue.toFixed(2)), this.props.scale);
    }

    render(){
        const scale = this.props.scale;
        const value = this.props.temperature;
        return(
            <div className='temperatureInput'>
                <h1>TEMPERATURA EM: {(scale === 'f')?'Fahrenheit':'Celcius'}</h1>
                <label>Temperatura: <br/> 
                    <input type='number' onChange={this.handleChange} value={value}/>
                </label>
            </div>
        );
    }

}