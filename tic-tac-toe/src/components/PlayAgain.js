import React from 'react';

function PlayAgain(props){
    if (props.winner){
        return <button onClick={props.handlePlayAgain}>Play Again</button>;
    }else{
        return <button style={{visibility:'hidden'}}>Play Again</button>;
    }
}

export default PlayAgain;