import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import CHeader from './components/CHeader'
import Channel from './components/Channel'
import FunctionClick from './components/FunctionClick'
import CFunctionClick from './components/CFunctionClick'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appstyle.css'
import Style from './appstyle.module.css'
import Form from './components/Form'
import Routing from './components/Routing1'
import LifeCycleA from './components/LifecycleA'
import HookCounter from './components/HookCounter';
//import PostList from './components/PostList'

//const name=<span>hii react</span>    -(h1 element with jsx using js in html)
//const newElement=React.createElement('h2',{className:'newElement'},'hello h2 tag');    - (creating h2 element without jsx)
//const test=() => {alert("hello ajay");   -function
//}
//const age=(a) => {        -(creating another functin using jsx)
// if(a>8){
// return <span>you are elegible</span>}
//else
//{
// return<span>you are not elegible</span>}}
//function App() {
//return (
//<div className="App">
// <h1>hii garima,{name}</h1>     
// { newElement}
// <button onClick={test}></button>  - calling the test function
//{age(19)}                          -calling the age function
//</div> );}
class App extends React.Component {
  render() {
    const numbers=[3,4,5,6];
    return (
      <div className="App">
      <h1 className={Style.success}>Green</h1>
      <h1 className='error'>Error</h1>

        <Header name="deepu" last="mishra">
          <p> deepu pgl hai</p>
        </Header>
        <Header name="mahima" last="mittal">
          <a href="">Click here</a></Header>
        <Header name="arpit" last="mittal" />
        <CHeader name="sakshi" last="garima" />
        <Channel />
        <FunctionClick />
        <CFunctionClick roll="22" numbers={numbers}/>
       <Stylesheet isvalue={false}></Stylesheet>
       <Inline/>
       <Form/>
       <Routing/>
       <LifeCycleA/>
    <HookCounter/>
       
      </div>
    );
  }
}
export default App;
