import React, { Component } from 'react'

class Rendom extends Component {

    randomtext() {
        let arr = ['Good Morning', 'Good night'];
        let num = Math.floor(Math.random() * 2)
        alert(arr[num])
    }
  

    style = {
        border: 'solid 1px black',
        display: "inline",
        backgroundColor: 'green', 
        width: '33%',
        height: "300px",
        margin: "2px",
        float: 'left'
    }
    styleButt={
        backgroundColor:'yellow',
        fontSize:'20px',
        position : 'relative',
        left: '28%',
        top:'62%'
    }

    render() {
        return (
            <div style={this.style}>
                <h1 style={{ textAlign: "center", color: "white" }}>Alert</h1>
                <button style={this.styleButt} onClick={this.randomtext}>הצג טקסט</button>

            </div>
        );
    }
}

export default Rendom;