import React from 'react';

function Block(props){
    return <div className="block" onClick={props.handleClick}></div>;
}

export default Block;