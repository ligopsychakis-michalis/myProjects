import React from 'react';
import '../../styles/Book.scss';
import {Link,useHistory} from 'react-router-dom';
import nocover from '../../images/nocover.gif';

function Book(props){
    const history = useHistory();

    let img = <></>;
    if (props.info.volumeInfo.imageLinks){ 
        img = <img onClick={() => history.push(`/details/${props.info.id}`)} src={props.info.volumeInfo.imageLinks.thumbnail} alt={props.info.volumeInfo.title} /> 
    }else{
        img = <img onClick={() => history.push(`/details/${props.info.id}`)} src={nocover} alt={props.info.volumeInfo.title} />
    };

    return (
        <div className="book">
            {img}
            <i onClick={() => history.push(`/details/${props.info.id}`)} className="fas fa-heart fa-4x"></i>
            <div className="title">
                <p>{props.info.volumeInfo.title}</p>
                <small><Link to={`/details/${props.info.id}`}>View Details</Link></small>
            </div>
        </div>
    );
};

export default Book;