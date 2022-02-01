import React from "react";

class Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState(state => ({count: ++state.count}))
    }

    decrement(){
        this.setState(state => ({count: --state.count}))
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <p>{(this.state.count % 2 === 0)? 'Парное' : 'Не парное'}</p>
                <button onClick = {()=>{this.increment()}}>increment</button>
                <button onClick = {()=>{this.decrement()}}>decrement</button>
                <ul>
                    <li><a href="/text2/name1">первое имя</a></li>
                    <li><a href="/text2/name2">второе имя</a></li>
                </ul>
            </div>
        )
    }
}

export default Component