import React, {Component} from 'react';
import Api from '../../services/starwars';
import './index.css';

export default class DetailSW extends Component{
    state={
        content:{},
    };
    async componentDidMount(){
        const {id} = await this.props.match.params;
        const value = await Api.get(`/${id}`);

        this.setState({content:value.data});

    }
    render(){
        const {content} = this.state;
        console.log(content);
        return(
            <div className='mainCommand'>
                <div className='command commandtitle'><p className='title main'>Name: </p><p>{content.name}</p></div>
                <div className='command'><p className='title'>Height: </p><p>{content.height}</p></div>
                <div className='command'><p className='title'>Mass: </p><p>{content.mass}</p></div>
                <div className='command'><p className='title'>Gender: </p><p>{content.gender}</p></div>
            </div>
        );
    }
}