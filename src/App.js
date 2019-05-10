import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import PatientsList from './components/PatientsList'

class App extends Component{
  state = {
    value:[10,2]
  };
render(){
  return (
    <React.Fragment>  
    <NavBar value = {this.state.value.length}/>
    <PatientsList />
    </React.Fragment>
  );
}
}

export default App;
