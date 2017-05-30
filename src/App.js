import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Form from './Form';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      email : "",
      name : ""
    };
    this.clear = this.clear.bind(this);
    this.update = this.update.bind(this);
  }

  clear(){

  }

  update(e){

  }

  render() {
    return (
      <div className="App">
      <Form update={this.update}/>
       <Button gumb = {this.clear}/>
      </div>
    );
  }
}

export default App;
