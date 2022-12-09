import React from 'react';

function Header({title='No Title'}) {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}

export default Header;