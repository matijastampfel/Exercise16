import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                 <input onChange={this.props.update} type="text"/>
                 <input onChange={this.props.update} type="text"/>
            </div>
        );
    }
}

export default Form;