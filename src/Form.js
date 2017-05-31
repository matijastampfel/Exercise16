import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                 <input onChange={this.props.updateEmail} title="email" type="text" value={this.props.emailState}/>
                 <input onChange={this.props.updateName} title="name" type="text" value={this.props.nameState}/>
            </div>
        );
    }
}

export default Form;