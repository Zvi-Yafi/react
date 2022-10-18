import React from 'react';
class KeyBord extends React.Component {
    state = {  }
    render() {
        return (
            <>
                <button onClick={() => 
                    this.props.onClick(this.props.id)}>{this.props.id}</button>
            </>
         );
    }
}
export default KeyBord;