import {useState} from 'react';

export default function useValidSignup(){
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirm,setConfirm] = useState("");
    const [message,setMessage] = useState({color:"", msg:""});

    const alphabetLow = "abcdefghijklmnopqrstuvwxyz";
    const alphabetUp = alphabetLow.toUpperCase();

    function handleSubmit(e){
        e.preventDefault();
        if (username && email && password && confirm){
            if (checkSignUp()){
                saveNewUser();
                setMessage({color:"green",msg:"You Signed-up successfully!! Please Log-in to get in your account."});
            };
        }else{
            setMessage({color:"red",msg:"Please fill all inputs."});
        };
        
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirm("");

        setTimeout(() => {
            setMessage({color:"",msg:""});
        }, 3000)
    };

    //check if signup form has valid inputs (return true or false)
    function checkSignUp(){
        if(!validateUsername()) return false;
        if(!validateEmail(email)) return false;
        if(!validatePassword()) return false;
        return true; 
    };

    //check username for validity (return false if already aexists)
    function validateUsername(){
        const allUsers = JSON.parse(localStorage.getItem("allUsers"));

        if(allUsers){
            if (allUsers.find(user => user.username == username)){
                setMessage({color:"red",msg:"Username already exists."});
                return false;
            }else{
                return true;
            };
        }else{ 
            return true; 
        };
    };

    //check email for validity
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(email).toLowerCase())){
            const allUsers = JSON.parse(localStorage.getItem("allUsers"));
            
            if (allUsers){
                if (allUsers.find(user => user.email == email)){
                    setMessage({color:"red",msg:"E-mail already exists."});
                    return false;
                }else{
                    return true;
                };
            }else{
                return true;
            };
        }else{
            setMessage({color:"red",msg:"Invalid e-mail."});
            return false;
        };
    }

    //check password for validity (must >8 && and at least a num a lowcase and an upcase)
    function validatePassword(){
        if (password.length < 8) {
            setMessage({color:"red",msg:"Password must contain at least 8 characters."});
            return false;
        };

        if (password !== confirm) {
            setMessage({color:"red",msg:"Confirmed password doesn't match."});
            return false;
        };

        let [hasNum,hasLow,hasUp] = [false,false,false];

        for (let ch of password){
            if (parseInt(ch)) hasNum = true   
            else if (alphabetLow.includes(ch)) hasLow = true
            else if (alphabetUp.includes(ch)) hasUp = true;
            console.log(hasNum,hasLow,hasUp);
            console.log(alphabetLow.includes(ch));
        
            if (hasNum && hasLow && hasUp) return true;
        };

        //if code comes here, password is not valid!
        setMessage({color:"red",msg:"Password must contain at least a number, a lowecase and an uppercase."});
        return false;
    };

    //save new user to LocalStorage
    function saveNewUser(){
        const infos = [
            {
                username: username,
                email: email,
                password: password,
                bookIDs:[]
            }
        ];

        if (localStorage.getItem("allUsers")){
            let allUsers = JSON.parse(localStorage.getItem("allUsers"));
            allUsers = [...allUsers, ...infos];
            localStorage.setItem("allUsers", JSON.stringify(allUsers));
        }else{
            localStorage.setItem("allUsers", JSON.stringify(infos));
        };
    };

    return [username,setUsername,email,setEmail,password,setPassword,confirm,setConfirm,handleSubmit,message];
}    