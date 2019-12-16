import React,{Component} from 'react';
import Api from '../../services/apiLaravel';
export default class apiLaravel extends Component{

    state = {
        value:[],
    }

    apiGet = async (value = "")=>{
        let estado = await Api.get(value);
        return this.setState({value:estado.data});
    }

    componentDidMount(){
        this.apiGet();
    }

    render(){
        const value = this.state.value.names;
        return(
            <div>
                {console.log(value.name)}
            </div>
        );
    }
}