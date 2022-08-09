// import { render } from "@testing-library/react";
import React, { Component } from "react";
import CardList from "../component/CardList";
import SearchBox from '../component/SearchBox'
import './app.css'
import Scroll from '../component/Scroll'



class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(user=>this.setState({ robots: user }))
    
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value })
  }

 render () {
    const filteredRobots = this.state.robots.filter(robots=>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if (this.state.robots.length === 0) {
      return (
        <h1 className="tc">Loading</h1>
      )
    } else {
      return ( 
 <div className="tc"> 
   <h1 className="f1">RoboFriends</h1>
   <SearchBox searchChange={this.onSearchChange} />

   <Scroll>
    <CardList robots={filteredRobots} />
   </Scroll>
 </div>
   );
    }
   
   
 }
}



export default App;
