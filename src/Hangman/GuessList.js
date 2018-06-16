import React from 'react';

const GuessList = (props) => {
    return (
        <div className="guesses">
            <div className="guessedLetters">{props.currentGuessList.join(", ").toUpperCase()}</div>
        </div>
    );
};

export default GuessList;
