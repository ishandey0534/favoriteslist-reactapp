import React from 'react';

export default class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.handleForm = this.handleForm.bind(this);
        this.getName = props.getName;
    }
    handleForm(e){
        e.preventDefault();
        const name = e.target.elements.name.value;
        if(name){
            this.getName(name);
        }
    }
    render(){
        return (
            <div>
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