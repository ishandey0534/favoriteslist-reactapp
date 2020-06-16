import React from 'react';
import Options from './Options';

class List extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.deleteList(this.props.listName);
    }
    render(){
        return (
            <div>
                <h4>Favorite {this.props.listName} - <button onClick={this.handleClick}>Delete</button></h4>
                <Options />
            </div>
        );
    }
}

export default List;