import React,{Component} from 'react';
import "./index.css";

// class IfOffline extends Component{
//     render(){
//         return(
//             <div className='l logoutCamp'>
//                 <h3>VOCÊ NÃO ESTÁ LOGADO!, FAÇA LOGIN PARA CONTINUAR!</h3>
//             </div>
//         );
//     }
// }
// class IfOnline extends Component{
//     render(){
//         return(
//             <div className='l loginCamp'>
//                 <h3>VOCÊ ESTÁ LOGADO!, Seja bem vindo {this.props.name}</h3>
                
//             </div>
//         );
//     }
// }

// class Verify extends Component{
    
//     render(){
//         let btn=''; 
//         if(this.props.name !== '' && !this.props.c){
//             btn = <IfOnline name={this.props.name}/>
//         }else{
//             btn = <IfOffline/>
//         }
//         return(
//         <div>{btn}</div>
//         );
//     }
    
// }

export default class RtWrite extends Component {
    state = {
      name: '',
      nameLoad: false,
      currentMessage: '',
    }; 

    componentDidMount(){
        this.ifOffline()
    }
    
    handleInputChange = (event) => {
      this.setState({ name: event.target.value }); 
    };

    handleSend = async () => {
        await this.setState({nameLoad:true});
        this.verify();
    };
    logout = async () => {
        await this.setState({nameLoad:false});
        this.verify();
    };

    ifOnline = ()=>{
        this.setState({currentMessage: <div className='l loginCamp'><h3>VOCÊ ESTÁ LOGADO!, Seja bem vindo {this.state.name}</h3><button onClick={this.logout}>Deslogar</button></div>});
    }
    ifOffline = ()=>{
        this.setState({currentMessage: <div className='l logoutCamp'><h3>VOCÊ NÃO ESTÁ LOGADO!, FAÇA LOGIN PARA CONTINUAR!</h3></div>});
        
    }
    verify = ()=>{
        if(this.state.nameLoad){
            return this.ifOnline()
        }else{
            return this.ifOffline()
        }
    }
    
    
    render() {
      return (
        <div>
            <div className='l entrada'>
                Digite seu primeiro nome: <br/> 
                <input id='inpute' onChange={this.handleInputChange} maxLength='30'/><br/>
                <button onClick={this.handleSend}>Logar</button>
                <p id='vd'>{`Valor digitado: ${this.state.name}`}</p>
            </div>
            <br/>
            <br/>
            
            {this.state.currentMessage}
            
                
            
        </div>
        
      );
    }
  }