import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const loginHandler = (event) => {
    event.preventDefault();
    fetch('/user/login', {
        method: 'POST', 
        body: JSON.stringify({user: {email: email, password: password}}),
        headers: new Headers ({
            'Content-Type': 'application/json'
        })
    }).then( 
        (response) => response.json()
    ).then((data) => {
        props.updateToken(data.sessionToken);
    })
}

return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
      <img src="/logo1.png" alt=""/>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form>
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
            onChange = {(e) => setEmail(e.target.value)} email = 'email' value = {email}
          />

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
            onChange = {(e) => setPassword(e.target.value)} password = "password" value = {password}  
          />
          
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            onSubmit={loginHandler}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" onSubmit={props.register} variant="body2">
                {"Don't have an account? Register Now!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
  );
}

export default Login;