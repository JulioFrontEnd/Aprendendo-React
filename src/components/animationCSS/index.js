import React from 'react';
import './index.css';
export default class animationCSS extends React.Component{
    state = {
        className:50,
        classBoss:25,
    }

    handleScroll = () =>{ 
            // let element = await document.querySelector('#done');
            // element = parseInt(element.style.top);

            if(document.documentElement.scrollTop>100){
                this.setState({
                    // className: ((document.documentElement.scrollTop+element>100)?100:element),
                       className:100,
                       classBoss:200,
                })
            }else{
                this.setState({
                    // className: ((document.documentElement.scrollTop+element>100)?100:element),
                       className:50,
                       classBoss:25,
                })
            }
           

           

       }   
    componentDidMount() {
        window.onscroll = () => this.handleScroll();   
    }
    render(){
        const whatImDoing = {
            color: 'red',
            position: 'fixed',
            top:this.state.className+'px',
            left:'50%',
            transform: 'translate(-50%,0)',
            transition: 'all 3s',
            zIndex:'1',
        }
        const crossBow = {
            ...whatImDoing,
            color: 'dodgerBlue',
            top:this.state.classBoss+50+'px',
            left:'35%',
            transform: 'translate(-50%,0)',
            fontSize:'3em',
            transition: 'all 5s',
        }
        const relative = {
            position:'relative',
            zIndex:'1',
        }
        return(
            <div style={relative} className='animationLab'>
                <h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3><h3 className='undefined'>DONE!</h3>
                <h3 id='done' style={whatImDoing}>AnotherText!</h3>
                <h1 style={crossBow}>MAIN TEXT!</h1>
            </div>
        );
    }
}