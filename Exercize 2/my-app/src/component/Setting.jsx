import React from 'react';
class Setting extends React.Component {
    render() {
        return (
            <div>
                <h1>Language:</h1>
                <button onClick={() => this.props.onClick()}>
                {this.props.state.hebKey?"ENG":"HEB"}
                </button>
                
                <h1>Color:</h1>
                <button onClick={() => {this.props.colorOnclick("red")}} 
                style={{color:"Red"}}>Red</button>

                <button onClick={() => {this.props.colorOnclick("Black")}}
                 style={{color:"Black"}}>Black</button>

                <button onClick={() => {this.props.colorOnclick("Blue")}}
                 style={{color:"Blue"}}>Blue</button>
                 
                <button onClick={() => {this.props.colorOnclick("brown")}}
                 style={{color:"brown"}}>brown</button>
            </div>
         );
    }
}
export default Setting;