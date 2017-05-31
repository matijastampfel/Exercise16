import React, {Component} from 'react';

class Button extends Component  {
    render(){
    return (
        <div className="buttonClass">
            <button onClick = {this.props.gumb}>Button</button>
        </div>
    );
    }
};

export default Button;