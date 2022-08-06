// import { useEffect, useState } from "react";
import React, {Component} from 'react';


// function App() {
 
//   return ( 
// <div> 
//   <h1>Hello World</h1>
// </div>
//   );
// }

class App extends Component {
  render() {
    return <h1>{this.props.greetings}</h1>
  }
}

export default App;
