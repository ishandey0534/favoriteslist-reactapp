import React from 'react';
import Form from './Form';
import Option from './Option';

class Options extends React.Component {
    constructor(props){
        super(props);
        this.addOption = this.addOption.bind(this);
        this.removeOption = this.removeOption.bind(this);
        this.state = {
            options: []
        };
    }
    addOption(option){
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        })
    }
    removeOption(optionToRemove){
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return option!==optionToRemove;
                })
            };
        })
    }
    render() {
        return (
            <div>
                {this.state.options.length!=0?this.state.options.map((option) => {
                    return <Option key={option} removeOption={this.removeOption}>{option}</Option>
                })
                :<p>No options</p>}
                <Form addOption={this.addOption}/>
            </div>
        );
    }
}

export default Options;