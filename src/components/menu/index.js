import React,{Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom';
export default class Menu extends Component{
    state = {
        menuContent:[],
        left:'-10%',
    }
    showAnimationLab = ()=>{
        if(document.querySelector('.animationLab') !== undefined && document.querySelector('.animationLab') !== null){
            document.querySelector('.animationLab').style.display = 'block';
        }
    }
    hideAnimationLab = ()=>{
        if(document.querySelector('.animationLab') !== undefined && document.querySelector('.animationLab') !== null){
            document.querySelector('.animationLab').style.display = 'none';
        }
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
    showListFunction = ()=>{
        this.hideAnimationLab();
        this.showItems();
    }
    hideListFunction = ()=>{
        this.showAnimationLab();
        this.hideItems();
    }
    hideItems = ()=>{
        this.setState({left:'-10%'});
    }
    showItems = ()=>{
        this.setState({left:'50%'});
    }
    styleItem = (id)=>{
        const style = {
            color:'#2d3436',
            position:'absolute',
            left:this.state.left,
            transform: "translate(-50%,0)",
            transitionDelay: `.${id}s`,
            transition: (id-1)+'s',
        }
        return style;
    }
    render(){
        const content = this.state.menuContent;
        return(
            <div className={"containerMenu"}>
                <input type='checkbox' id='chk' />
                <label htmlFor='chk' className='btn-menu btn-open-menu' onClick={this.showListFunction}><i className="fas fa-bars"></i></label>
                
                <div className='bg-dark'></div>
                <div className={"sidebar container-"+((this.props.color)?this.props.color:'primary')}>
                
                    <nav className="menu">
                    <label htmlFor='chk' className='btn-menu btn-close-menu' onClick={this.hideListFunction}><i className="fas fa-times"></i></label>
                        {
                            content.map((p)=>{
                                return <p key={p.id.toString()}><Link style={this.styleItem(p.id)} to={p.webRoute}>{p.content}</Link></p>
                            })
                        }    
                    </nav>
                </div>
            </div>        
        );
    }
}