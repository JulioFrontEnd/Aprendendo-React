import React from 'react';

class MenuBuilder extends React.Component{
    render(){
        return(
            <div className={"containerMenu"}>
                <input type='checkbox' id='chk' />
                <label htmlFor='chk' className='btn-menu btn-open-menu'><i className="fas fa-bars"></i></label>
                
                <div className='bg-dark'></div>
                <div className={"sidebar container-"+((this.props.color)?this.props.color:'primary')}>
                <label htmlFor='chk' className='btn-menu btn-close-menu'><i className="fas fa-times"></i></label>
                    <nav className="menu">
                    {this.props.children}
                    </nav>
                </div>
            </div>
        );
    }
    
}

export default MenuBuilder;