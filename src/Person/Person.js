import React from 'react';

const person = ({name, age, children}) => {
    return (
        <div>
            <p>I am {name} and I am {age}</p>
            <p>{children}</p>
        </div>
    )
}

export default person;