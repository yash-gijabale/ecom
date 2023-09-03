import React from "react";


class Counter extends React.Component{
    constructor(){
        super();

        this.state = {
            num: 0
        }
    }

    add = () =>{
        // this.setState({counter: counter+1})
        let addnum = this.state.num +1
        this.setState({num : addnum})
    }

    remove = () =>{
        let removenum = this.state.num -1
        if(0 < removenum){
            this.setState({num : removenum})
        }else{
            this.setState({num : 0})

        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.add}>ADD</button>
                <button onClick={this.remove}>REMOVE</button>
            </div>
        )
    }
}

export default Counter;