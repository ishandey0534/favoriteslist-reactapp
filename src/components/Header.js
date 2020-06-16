import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>Favorites List App</h1>
            <h3>Make lists of your favorite things. Then choose from your favorite randomly...</h3>
            <h1>Welcome {props.name}</h1>
        </div>
    );
};

export default Header;