import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Message from '../presentational/Message';
import '../../styles/Login.scss';
import paper from '../../images/paper.png';
import useValidLogin from '../../customHooks/LoginCustomHook';


function Login(props){
    const [message,handleSubmit,email,setEmail,password,setPassword] = useValidLogin(props);

    return (
        <div className="login">
            {message.msg ? <Message message={message} /> : <></>}
            <img src={paper} alt="paper"/>
            <h2>Log-in</h2>
            <form onSubmit={handleSubmit}>
                <TextField value={email} onChange={e => setEmail(e.target.value)} label="e-mail" />
                <TextField value={password} onChange={e => setPassword(e.target.value)} label="password" type="password"/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Login;