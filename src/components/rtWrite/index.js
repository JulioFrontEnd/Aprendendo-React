import React,{Component} from 'react';
import "./index.css";

class IfOffline extends Component{
    render(){
        return(
            <div className='l logoutCamp'>
                <h3>VOCÊ NÃO ESTÁ LOGADO!, FAÇA LOGIN PARA CONTINUAR!</h3>
            </div>
        );
    }
}
class IfOnline extends Component{
    render(){
        return(
            <div className='l loginCamp'>
                <h3>VOCÊ ESTÁ LOGADO!, Seja bem vindo {this.props.name}</h3>
                
            </div>
        );
    }
}

class Verify extends Component{
    
    render(){
        let btn=''; 
        if(this.props.name !== '' && !this.props.c){
            btn = <IfOnline name={this.props.name}/>
        }else{
            btn = <IfOffline/>
        }
        return(
        <div>{btn}</div>
        );
    }
    
}

export default class RtWrite extends Component {
    state = {
      name: '',
      nameLoad: false,
    }; 
    
    handleInputChange = () => {
      this.setState({ name: document.getElementById("inpute").value }); 
    };

    handleSend = () => {
        this.setState({nameLoad:true});
    };

    
    
    
    render() {
        const logout = () =>{
            this.setState({nameLoad:false});
        }
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
            
            <Verify name={this.state.name} c={this.state.nameLoad}/>
            <button onClick={logout}>Deslogar</button>
                
            
        </div>
        
      );
    }
  }