import React from 'react';
import './Splash.css';
import Button from '@material-ui/core/Button';

const Splash = (props) => {

    return (
        <div className="Splash">
            <div className="mainContainer">
                <div className="top">
                <img src="/logo1.png" alt=""/>
                </div>
                <div className="middle">
                <p>helpMeDecide is a community-based decision helper.</p><hr />
                <p> Stuck at a crossroads?</p>
                <p>Let the Community Decide</p><hr />
                </div>
                <div className="bottom">
                <Button className="loginButton" variant="contained" onClick={props.login} color="primary">Login</Button>
                <Button className="loginButton" variant="contained" onClick={props.register} color="primary">Register</Button>
                </div>
            </div>
        </div>
    );
  }

export default Splash;
 
