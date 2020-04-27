import React, {useState} from 'react';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = (event) => {
        event.preventDefault();
        console.log("Created New User")
        fetch('/user/createuser', {
            method: 'POST', 
            body: JSON.stringify({user: {email: email, password: password}}),
            headers: new Headers({
                'Content-Type': "application/json"
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }
    
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
          <img src="/logo1.png" alt=""/>
            <Typography component="h1" variant="h5">
              Register A New Account
            </Typography>
            <form>
              <Grid container spacing={2}>
             
                <Grid item xs={12}>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)} email = "email" value = {email}
              />

                </Grid>
                <Grid item xs={12}>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)} name = "password" value = {password}
              />

                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Send me Email Updates"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
                onSubmit={loginHandler}
              >
                Register Account
              </Button>
              <Grid container justify="flex-end">
              <Grid item>
                  <Link href="#" handleSubmit={props.login} variant="body2">
                    "Already have an account? Login!"
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
         
        </Container>
      );
    }
    
    
    export default Register