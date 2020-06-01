import React, {useContext, useState} from 'react';
import '../../styles/Navbar.scss';
import {Link, useParams} from 'react-router-dom';
import {CurrentUser} from '../../App';
import Message from './Message';


function Navbar(props){
    const [message,setMessage] = useState({color:"", msg:""});
    const currentUser = useContext(CurrentUser);
    const params = useParams();

    //currentUser can add book to his/her fav-list only from details path.. so I use the params..
    function addBook(){
        if (!currentUser.bookIDs.includes(params.id)){
            //add book to my state
            props.setCurrentUser({...props.currentUser, bookIDs: [...currentUser.bookIDs, params.id]});
            //add book to localStorage
            let allUsers = JSON.parse(localStorage.getItem("allUsers"));
            allUsers = allUsers.map(user => {
                if(user.username == currentUser.username){
                    return {...user, bookIDs:[...user.bookIDs,params.id]};
                }else{
                    return user;
                };
            });

            localStorage.setItem("allUsers", JSON.stringify(allUsers));

            setMessage({color:"limegreen", msg:"Book added successfully."});
        }else{
            setMessage({color:"#6494ed", msg:"This Book is already added."});
        };

        setTimeout(() => {
            setMessage({color:"", msg:""});
        }, 3000);
    };


    if (props.path == "home"){
        return (
            <header>
                <div className="logo">
                    FAV<i className="fas fa-bookmark"></i> BOOKS
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to={currentUser.username ? "/my0fav0books" : "/log0sign"}>My FAV<i className="fas fa-bookmark"></i> BOOKS</Link></li>
                </ul>
                <ul>
                    <li><Link to="/login">log-in</Link></li>
                    <li><Link to="/signup">sign-up</Link></li>
                </ul>
            </header>
        );
    }else{
        return (
            <>
                <header>
                    <div className="logo">
                        FAV<i className="fas fa-bookmark"></i> BOOKS
                    </div>
                    {props.path == "details" && currentUser.username ? <button type="button" onClick={addBook} className="add-book">Add to My FAV<i className="fas fa-bookmark"></i> BOOKS</button> : <></> }
                    <Link to="/"><button><i className="fas fa-long-arrow-alt-left"></i> Back</button></Link>   
                </header>
                {message.msg ? <Message message={message} /> : <></>}
            </>
        );
    };
    
};

export default Navbar;