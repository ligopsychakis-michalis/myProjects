import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {API_KEY} from '../../config';
import '../../styles/Details.scss';

function Details(props){
    const params = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${params.id}?key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    if (Object.keys(data).length){
        return (
            <div className="details">
                {data.volumeInfo.imageLinks ? 
                    <img src={data.volumeInfo.imageLinks.thumbnail} alt={data.volumeInfo.title} /> :
                    <img src="https://i.imgur.com/sJ3CT4V.gif" alt={data.volumeInfo.title} />
                }    
                <div className="details-info">
                    <h2>{data.volumeInfo.title}</h2>
                    <p>Author: {data.volumeInfo.authors[0]}</p>
                    <p>Publisher: {data.volumeInfo.publisher}</p>
                    <p>Publish Date: {data.volumeInfo.publishedDate}</p>
                    <p>Is Ebook: {data.saleInfo.isEbook ? "Yes" : "No"}</p>
                </div> 
                <div className="description">
                    <h3>Descripion</h3>
                    <p>{data.volumeInfo.description}</p>
                    <a href={data.volumeInfo.previewLink} target="_blank">go to self link</a>
                </div>
            </div>
        );
    }else{
        return <></>;
    }
    
};

export default Details;