import React from 'react';
import Rendom from './component/alert';
import Timer from './component/Timer';
import Input from './component/input';
 let Name = prompt('Enter your Name');
function App() {
  return (<div>
    <h1 style={
      {textAlign:'center', color:'brown',fontStyle:'italic'}
      }>My first component</h1>
    <h2  style={
      {textAlign:'center', color:'brown',fontStyle:'italic'}
      }>Welcome: {Name}</h2>
  <Rendom />
   <Timer />
   <Input />
</div>
  )
}

export default App;
