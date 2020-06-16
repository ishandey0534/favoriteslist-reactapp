import React from 'react';

export default class AddList extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const listName = e.target.elements.listName.value;
        if(listName){
            this.props.getListName(listName);
            e.target.elements.listName.value='';
        }
    }
    render(){
        return (
            <form className="addlist-form" onSubmit={this.handleSubmit}>
                <input name="listName" type="text" placeholder="List Name" />
                <button>Submit</button>
            </form>
        );
    }
}