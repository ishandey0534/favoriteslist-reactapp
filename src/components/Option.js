import React from 'react';

class Option extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.removeOption(this.props.children);
    }
    render(){
        return (
            <div>
                <p>{this.props.children}<button onClick={this.handleClick}>Remove</button></p>
            </div>
        );
    }
}

export default Option;