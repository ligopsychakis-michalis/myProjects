import React from 'react';
import '../../styles/NoBooks.scss';
import LinearProgress from '@material-ui/core/LinearProgress';


function NoBooks(props){
    if (props.data == null){
        return <LinearProgress />;
    }else{
        return <div className="no-books">No Books<br/> by these inputs..</div>;
    }
};

export default NoBooks;