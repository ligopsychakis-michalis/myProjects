import React, { useEffect,useState } from 'react';
import '../../styles/Book.scss';
import {Link,useHistory} from 'react-router-dom';
import nocover from '../../images/nocover.gif';

function Book(props){
    const [img,setImg] = useState(<></>);
    const [path,setPath] = useState("/details");
    const history = useHistory();
    
    useEffect(() => {
        if(history.location.pathname == "/my0fav0books"){
            setPath("/fav0details");
        };
    
        if (props.info.volumeInfo.imageLinks){ 
            setImg(<img onClick={() => history.push(`${path}/${props.info.id}`)} src={props.info.volumeInfo.imageLinks.thumbnail} alt={props.info.volumeInfo.title} />); 
        }else{
            setImg(<img onClick={() => history.push(`${path}/${props.info.id}`)} src={nocover} alt={props.info.volumeInfo.title} />);
        };
    } ,[])
   

    return (
        <div className="book">
            {img}
            <i onClick={() => history.push(`${path}/${props.info.id}`)} className="fas fa-heart fa-4x"></i>
            <div className="title">
                <p>{props.info.volumeInfo.title}</p>
                <small><Link to={`${path}/${props.info.id}`}>View Details</Link></small>
            </div>
        </div>
    );
};

export default Book;