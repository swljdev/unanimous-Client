import React from 'react';
import Signup from './Register';
import Login from './Login';

const Auth = (props) => {
   
    
    return(
        
            <div className= 'background'>
                <Signup updateToken = {props.updateToken}/>
                <Login updateToken = {props.updateToken} />  
            </div>
       
        
    )
}  
export default Auth;

