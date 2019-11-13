import React,{Component} from 'react';
import Api from '../../services/starwars';

class Starwars extends Component{
    state = {
        people: [],
    }
        
    componentDidMount(){
        this.getPeople();
    }

    getPeople = async ()=>{
        const response = await Api.get('/people');
        console.log(response);
        this.setState({people: response.data.results});
    }

    render(){
        return(
            <div className='container'>
                {this.state.people.map((item)=>{
                    return <p key={item.name}>Nome: {item.name}</p>                })}
            </div>
        );
    }


}

export default Starwars;