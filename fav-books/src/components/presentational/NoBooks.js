import React from 'react';
import '../../styles/NoBooks.scss';
import LinearProgress from '@material-ui/core/LinearProgress';

let renderTimes = 0;

function NoBooks(){
    renderTimes += 1;

    if (renderTimes == 1){
        return <LinearProgress />;
    }else{
        return <div className="no-books">No Books<br/> by these inputs..</div>;
    }
};

export default NoBooks;