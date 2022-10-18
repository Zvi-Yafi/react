import React from 'react';
import KeyBord from './component/KeyBoard';
import Setting from './component/Setting';
const keybord = [
  [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',],
    ['/', "'", 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ',],
    ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף',],
    ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '.',]
  ],
  [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',],
    ['q', "w", 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';',],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',]
  ],
  [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',],
    ['Q', "W", 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';',],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/',]
  ],
];
class App extends React.Component {
  state = {
    outKey: " ",
    hebKey: true,
    style: {
      color: "black",
      fontSize: "25px",
      backgroundColor: "white"
    }
  }
  addKey = (id) => { this.setState({ outKey: this.state.outKey+id  }) }
  
  spaceKey = () => { this.setState({ outKey: this.state.outKey + "\xa0" }) }

  backSpace = () => { this.setState({ outKey: this.state.outKey.slice(0, this.state.outKey.length - 1) }) }

  delete = () => { this.setState({ outKey: " " }) }

  changeKey = () => { this.setState({ hebKey: !this.state.hebKey }) }

  changeColor = (a) => { this.setState({ style: { ...this.state.style, color: a } }) }
  render() {
    return (
      <>
        <h1 style={{ color: this.state.style.color }}>{this.state.outKey}</h1>

        {this.state.hebKey ?
          keybord[0].map(z => (<div key={z}>{z.map(x =>
            <KeyBord key={x}  id={x} onClick={this.addKey} spaceClick={this.spaceKey} />)}</div>))

          : keybord[1].map(z => (<div key={z} >{z.map(x =>
            <KeyBord key={x} id={x} onClick={this.addKey} spaceClick={this.spaceKey}/>)}</div>))
            }

        <div>
          <button onClick={this.spaceKey} style={{ width: "10%" }}>רווח</button>
          <button onClick={this.backSpace}>Backspace</button>
          <button onClick={this.delete}>Delete</button>
          <button onClick={()=>this.UppreCase} >UpperCase</button>
                
                
        </div>
        <Setting onClick={this.changeKey} state={this.state} colorOnclick={this.changeColor} />
      </>
    );
  }
}
export default App;
