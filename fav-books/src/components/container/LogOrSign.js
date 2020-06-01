import React from 'react';
import Login from './Login';
import Signin from './Signup';
import '../../styles/LogOrSign.scss';

function LogOrSign({setCurrentUser}){
    return(
        <div className="log-sign">
            <Login setCurrentUser={setCurrentUser} />
            <Signin />
        </div>
    );
};

export default LogOrSign;