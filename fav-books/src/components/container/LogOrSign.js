import React from 'react';
import Login from './Login';
import Signin from './Signup';
import '../../styles/LogOrSign.scss';

function LogOrSign(){
    return(
        <div className="log-sign">
            <Login />
            <Signin />
        </div>
    );
};

export default LogOrSign;