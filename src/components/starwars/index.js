import React,{Component} from 'react';
import Api from '../../services/starwars';
import "./style.css";
import {Link} from 'react-router-dom';

class Starwars extends Component{
    state = {
        people: [],
        prevPage: null,
        nextPage: "https://www.swapi.co/api/people/?page=2",
    }
        
    componentDidMount(){
        this.getPeople();
    }

    getPeople = async (page=null)=>{
        const response = await Api.get((page!==null)?page:"");
        this.setState({people: response.data.results, prevPage: response.data.previous, nextPage: response.data.next});
    }

    prevPeople = ()=>{
        this.getPeople(this.state.prevPage);
    }
    nextPeople = ()=>{
        this.getPeople(this.state.nextPage);
    }

    render(){
        const {people,prevPage,nextPage} = this.state;
        return(
            <div className='containerAPI'>
                {people.map((item)=>{
                    return( 
                        <div key={item.name}>
                            <p className="titleAPI">Nome: </p><p className="contentAPI">{item.name}</p>
                            <Link to={`/starwars/detail/${item.url.replace("https://swapi.co/api/people/","")}`} className='littleButton linkList'>DETALHES</Link>
                        </div>
                    );})}
                <div className="buttonAPI">
                    <button onClick={this.prevPeople} disabled={prevPage===null} className='littleButton'>ANTERIOR</button>
                    <button onClick={this.nextPeople} disabled={nextPage===null} className='littleButton'>PROXIMO</button>
                </div>
            </div>
        );
    }


}

export default Starwars;