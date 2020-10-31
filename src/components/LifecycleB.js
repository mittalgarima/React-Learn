import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Garima"
        }
        console.log("LifecycleB:constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB:getDerivedStateFromProps");
        return null;}
        componentDidMount(){
            console.log("LifecycleB:ComponentDidMount");

        }
    
    render() {
        console.log("LifecycleB:getDerivedStateFromProps");
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB