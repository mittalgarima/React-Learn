import React from 'react';
import Testing from './Testing';
class CHeader extends React.Component {
  state = {
    users: [
      { id: 1, name: "sakshi", class: "A" },
      { id: 2, name: "arpit", class: "B" },
    ]
  }
  render() {
    console.log(this.state.users)
    const users = this.state.users.map((users) =>
     {
     
       return(
      // <h1 key={users.id} >{users.id} {users.name} {users.class}</h1> ) });
      //console.log(this.state.users[0].id);
      <Testing key={users.id} value={users.id}></Testing>)});
      return (<div>
        <h1>Hello {this.props.name} </h1>
        

       {users}
        </div>)
    }   
  }
  export default CHeader;
