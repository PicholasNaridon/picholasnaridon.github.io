import React from 'react';

const DisplayWord = (props) => {
    return (
        <div className="wordContainer">
            <div>{props.output}</div>
        </div>
    );
};

export default DisplayWord;
