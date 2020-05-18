import React from 'react';

function Score(props){
    return (
        <div className="score">
            <h3>Score</h3>
            <p>player X: {props.score.playerX}</p>
            <p>player O: {props.score.playerO}</p>
        </div>
    );
};

export default Score;