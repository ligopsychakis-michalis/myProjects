import React,{useContext, useState, useEffect} from 'react';
import {CurrentUser} from '../../App';
import Book from '../presentational/Book';
import LinearProgress from '@material-ui/core/LinearProgress';
import {API_KEY} from '../../config';


function MyFavBooks(){
    const user = useContext(CurrentUser);
    const [favBooks, setFavBooks] = useState([]);

    useEffect(() => {
        user.bookIDs.forEach(id => {
            fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`)
                .then(res => res.json())
                .then(data => [...favBooks, data])
                .then(newFavBooks => setFavBooks(newFavBooks));
        });
    }, []);

    console.log(user);
    console.log(favBooks);

    return (
        <div className="fav-books books-container">
            {favBooks.length > 0 ? favBooks.map((book,i) => <Book info={book} key={i} />) : <LinearProgress />}
        </div>
    );
};

export default MyFavBooks;