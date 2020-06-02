import React, {useContext} from 'react';
import '../../styles/Navbar.scss';
import {Link, useHistory} from 'react-router-dom';
import Message from './Message';
import useNavbar from '../../customHooks/NavbarCustomHook';


function Navbar(props){
    const history = useHistory();
    const [currentUser,addBook,removeBook,message,logOut] = useNavbar(props);


    if (props.path == "home"){
        return (
            <>
                <header>
                    <div className="logo">
                        FAV<i className="fas fa-bookmark"></i> BOOKS
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to={currentUser.username ? "/my0fav0books" : "/log0sign"}>My FAV<i className="fas fa-bookmark"></i> BOOKS</Link></li>
                    </ul>
                    {!currentUser.username ? 
                        <ul>
                            <li><Link to="/login">log-in</Link></li>
                            <li><Link to="/signup">sign-up</Link></li>
                        </ul>
                    :
                        <ul className="user-logout">
                            <li><i className="fas fa-user"></i> {currentUser.username}</li>
                            <li><button type="button" onClick={logOut}>Log-out</button></li>
                        </ul>
                    }    
                </header>
                {message.msg ? <Message message={message} /> : <></>}
            </>
        );
    }else{
        return (
            <>
                <header>
                    <div className="logo">
                        {props.path == "my0fav0books" ? <span style={{color:"#faebd7"}}>MY</span> : ""} FAV<i className="fas fa-bookmark"></i> BOOKS
                    </div>
                    {props.path == "details" && currentUser.username ? <button type="button" onClick={addBook} className="add-book">Add to My FAV<i className="fas fa-bookmark"></i> BOOKS</button> : <></> }
                    {props.path == "fav0details" ? <button type="button" onClick={removeBook} className="remove-book">Remove from My FAV<i className="fas fa-bookmark"></i> BOOKS</button> : <></> }
                    <button onClick={() => history.goBack()}><i className="fas fa-long-arrow-alt-left"></i> Back</button>   
                </header>
                {message.msg ? <Message message={message} /> : <></>}
            </>
        );
    };
    
};

export default Navbar;