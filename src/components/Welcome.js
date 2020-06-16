import React from 'react';
import '../styles/style.scss';

export default class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.handleForm = this.handleForm.bind(this);
    }
    handleForm(e){
        e.preventDefault();
        const name = e.target.elements.name.value;
        if(name){
            this.props.getName(name);
        }
    }
    render(){
        return (
            <div className="Welcome">
                <h2>Hi there!</h2>
                <h3>Please enter your name...</h3>
                <form onSubmit={this.handleForm}>
                    <input name="name" type="text" placeholder="Name" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}