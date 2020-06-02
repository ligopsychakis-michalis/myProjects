import {useContext, useState} from 'react';
import {useParams} from 'react-router-dom';
import {CurrentUser} from '../App';


export default function useNavbar(props){
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

            setMessage({color:"green", msg:"Book added successfully."});
        }else{
            setMessage({color:"#6494ed", msg:"This Book is already added."});
        };

        setTimeout(() => {
            setMessage({color:"", msg:""});
        }, 2000);
    };


    function removeBook(){
        //remove book from my state
        props.setCurrentUser({...props.currentUser, bookIDs: currentUser.bookIDs.filter(id => id != params.id)});
        
        //remove book from localStorage
        let allUsers = JSON.parse(localStorage.getItem("allUsers"));
        const user = allUsers.find(user => user.username == currentUser.username);
        const userNewBookIDs = user.bookIDs.filter(id => id != params.id);
        allUsers = allUsers.map(user => {
            if(user.username == currentUser.username){
                return {...user, bookIDs:userNewBookIDs};
            }else return user;
        });
        localStorage.setItem("allUsers", JSON.stringify(allUsers));

        setMessage({color:"green", msg:"Book removed successfully."});
        setTimeout(() => {
            setMessage({color:"", msg:""});
        }, 2000);
    };


    function logOut(){
        props.setCurrentUser({username:"", bookIDs:[]});
        setMessage({color:"green", msg:"You Loged-out successfully."});
        setTimeout(() => {
            setMessage({color:"", msg:""});
        }, 2000);
    };

    return [currentUser,addBook,removeBook,message,logOut];
}