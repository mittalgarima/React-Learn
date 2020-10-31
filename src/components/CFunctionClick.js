import React, { Component } from 'react'
export class CFunctionClick extends Component {
    constructor(props){
        super(props);
      //  this.changeEvent=this.changeEvent.bind(this);
        this.state={
            course:"MCA",
            roll:this.props.roll
        }
    }
    changeEvent=() => {
        this.setState({
            course:"BCA",
        })
        //console.log('Hello Ajay',this.state.course);
        console.log('Hello Ajay',this.props.roll)

    }
    render() {
         const numbers=this.props.numbers;
         //const newNumbers=numbers.map ((numbers)=> {
            // return <li>{numbers}</li>});
    //     console.log(numbers)  
    //console.log(newNumbers)
        return (
            <div>
                <button onClick={this.changeEvent}>hit me</button> 
             {this.state.course}
            {this.props.roll}
            <ul>
            {
                //{newNumbers}
                numbers.map((numbers)=>{return <li key={numbers}>{numbers}</li>} )
            }
            </ul>
            </div>
        )
    }
}

export default CFunctionClick

