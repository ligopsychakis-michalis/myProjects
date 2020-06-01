import {useState} from 'react';

export default function useValidLogin(props){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState({color:"",msg:""});

    function handleSubmit(e){
        e.preventDefault();
        if (email && password){
            if (checkLogin()){
                setMessage({color:"limegreen",msg:"You Loged-in successfully!!"});
            };
        }else{
            setMessage({color:"red",msg:"Please fill all inputs."});
        };
        
        setEmail("");
        setPassword("");

        setTimeout(() => {
            setMessage({color:"",msg:""});
        },5000)
    };


    function checkLogin(){
        const allUsers = JSON.parse(localStorage.getItem("allUsers"));
        if (allUsers){  
            const currentUser = allUsers.find(user => user.email == email && user.password == password);
            if (currentUser){
                props.setCurrentUser({username: currentUser.username, bookIDs:currentUser.bookIDs});
                return true;
            }else{
                setMessage({color:"red",msg:"Either E-mail or Password is wrong."});
                return false; 
            }
        }else{
            setMessage({color:"red",msg:"Either email or password is wrong."});
            return false;
        }
    };

    return [message,handleSubmit,email,setEmail,password,setPassword];
}