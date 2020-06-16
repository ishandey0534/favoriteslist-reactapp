import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.handleForm = this.handleForm.bind(this);
    }
    handleForm(e){
        e.preventDefault();
        const option = e.target.elements.name.value;
        if(option){
            this.props.addOption(option);
            e.target.elements.name.value='';
        }
    }
   render(){
       return (
        <form onSubmit={this.handleForm}>
            <input name="name" type="text" placeholder="Add something" />
            <button>Add</button>
        </form>
       );
   } 
};

export default Form;