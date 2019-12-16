import React,{Component} from 'react';
import MenuBuilder from './menu';
import './index.css';
import {Link} from 'react-router-dom';
export default class Menu extends Component{
    state = {
        menuContent:[],
    }
    componentDidMount(){
        this.setState({menuContent:[
                {content:'home', id:0, webRoute: '/'},
                {content:'contato', id:1, webRoute: '/contact'},
                {content:'serviços', id:2, webRoute: '/servicos'},
                {content:'desempenho', id:3, webRoute: '/desempenho'},
                {content:'outros', id:4, webRoute: '/another'},
            ],
        });
    }
    render(){
        const content = this.state.menuContent;
        return(
            <MenuBuilder color={this.props.color}>
                {
                    content.map((p)=>{
                        return <p key={p.id.toString()}><Link  to={p.webRoute}>{p.content}</Link></p>
                        }
                    )
                }
            </MenuBuilder>
            
        );
    }
}