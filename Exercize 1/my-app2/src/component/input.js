import React, { Component } from 'react'
class Input extends Component {
    constructor(props) {
        super(props);
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
    styleInp = {
        fontSize:'40px',
        color:'red',
        marginLeft:"20px"
    }
    render() {
        return (
            <div style={this.style}>
                <h1 style={{ textAlign: "center" }}>Input</h1>
                <input style={this.styleInp} type="checkbox" />
                <label  style={this.styleInp}>a suit</label>
                <br />
                <input style={this.styleInp} type="checkbox" />
                <label  style={this.styleInp}>hat</label>
                <br />
                <input style={this.styleInp} type="checkbox" />
                <label style={this.styleInp}>shoes</label>
                <br />

            </div>
        );
    }
}

export default Input;