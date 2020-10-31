import React from 'react';

class Channel extends React.Component{
    constructor(){
        super();
        this.state= {
      msg:'Hello bhabhi'
        }
    }
    clickMe(){
 this.setState({
     msg:'Welcome to your(our) House'
        })
  }
    render(){
        return(<div>
         <h1>{this.state.msg}</h1>
         <button onClick={ ()=> {this.clickMe()}}>Welcome</button></div>
         )
    }
}
export default Channel;
 