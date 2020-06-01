import React,{useContext, useState, useEffect} from 'react';
import {CurrentUser} from '../../App';
import Book from '../presentational/Book';
import LinearProgress from '@material-ui/core/LinearProgress';
import Message from '../presentational/Message';
import {API_KEY} from '../../config';


function MyFavBooks(){
    const user = useContext(CurrentUser);
    const [favBooks, setFavBooks] = useState([]);
    const [message,setMessage] = useState({color: "", msg:""});

    useEffect(() => {
        if(user.bookIDs.length == 0){
            setMessage({color: "#6495ed", msg: "No Books in your Fav-List yet."});
        }else{
            user.bookIDs.forEach(id => {
                fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`)
                    .then(res => res.json())
                    .then(data => setFavBooks(favBooks => favBooks.concat(data)));
            });
        };    
    }, []);
    
    return (
        <div className="fav-books books-container">
            {favBooks.length > 0 ? favBooks.map((book,i) => <Book info={book} key={i} />) : (message.msg ? <Message message={message} /> : <LinearProgress />)}
        </div>
    );
};

export default MyFavBooks;