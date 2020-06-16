import React from 'react';

export default class AddList extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getListName = props.getListName;
    }
    handleSubmit(e){
        e.preventDefault();
        const listName = e.target.elements.listName.value;
        if(listName){
            this.getListName(listName);
            e.target.elements.listName.value='';
        }
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="listName" type="text" placeholder="List Name" />
                <button>Submit</button>
            </form>
        );
    }
}