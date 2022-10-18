import React, { Component } from 'react'
class Timer extends Component {
constructor(){
    super()
    this.state = { time: new Date() }

}

    style = {
        border: 'solid 1px black',
        display: "inline",
        backgroundColor: 'withe',
        width: '30%',
        height: "300px",
        float: 'left',
        margin: "2px"

    }

    getTime = setInterval(() => {
            this.setState({ time: new Date() })
        }, 1000)
        
    
    
    render() {
        return (
            <div style={this.style}>
                <h1 style={{ textAlign: "center" }}>The time is </h1>
                <h2 style={{ textAlign: "center" }}>{this.state.time.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Timer;