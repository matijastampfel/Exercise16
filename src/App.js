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
    this.updateEmail = this.updateEmail.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  clear(){
    this.setState({name:"", email:""});
  }

  updateEmail(e){
    this.setState({email: e.target.value});
    
  }

  updateName(e){
    
      this.setState({name: e.target.value});
    
  }

  render() {
    return (
      <div className="App">
      <Form updateName={this.updateName} updateEmail={this.updateEmail} nameState={this.state.name} emailState={this.state.email}/>
       <Button gumb = {this.clear}/>
      </div>
    );
  }
}

export default App;
