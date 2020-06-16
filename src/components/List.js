import React from 'react';
import Options from './Options';

const List = (props) => {
    return (
        <div>
            <h4>Favorite {props.listName}</h4>
            <Options />
        </div>
    );
};

export default List;