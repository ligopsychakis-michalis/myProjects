import React from 'react';

function Winner(props){
    if (props.winner != "Draw"){
        return <div>Winner is: {props.winner}</div>;

    }else {
        return <div>It's a {props.winner}</div>;
    }
};

export default Winner;