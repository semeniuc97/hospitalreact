import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar'
import Counters from './components/counters'

class App extends Component{
  state = {
    value:[10,2]
  };
render(){
  return (
    <React.Fragment>  
    <NavBar value = {this.state.value.length}/>
    <Counters />
    </React.Fragment>
  );
}
}

export default App;
