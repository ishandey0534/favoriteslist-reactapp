import React from 'react';

class Option extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.removeOption = props.removeOption;
        this.option = props.children;
    }
    handleClick(){
        this.removeOption(this.option);
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