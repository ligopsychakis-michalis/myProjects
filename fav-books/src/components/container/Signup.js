import React, { useState, isValidElement } from 'react';
import TextField from '@material-ui/core/TextField';
import Message from '../presentational/Message';
import '../../styles/Signup.scss';
import paper from '../../images/paper.png';
import useValidSignup from '../../customHooks/SignupCustomHook';


function Signup(){
   const [username,setUsername,email,setEmail,password,setPassword,confirm,setConfirm,handleSubmit,message] = useValidSignup();

    return (
        <div className="signup">
            {message.msg ? <Message message={message} /> : <></>}
            <img src={paper} alt="paper"/>
            <h2>Sign-up</h2>
            <form onSubmit={handleSubmit}>
                <TextField value={username} onChange={e => setUsername(e.target.value)} label="username" />
                <TextField value={email} onChange={e => setEmail(e.target.value)} label="e-mail" />
                <TextField value={password} onChange={e => setPassword(e.target.value)} label="password" type="password"/>
                <TextField value={confirm} onChange={e => setConfirm(e.target.value)} label="confirm password" type="password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Signup;