import React from 'react'
import {useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { loginUser } from './ressources/actions';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    error: {
      color: 'red'
    }
  }));



function Login(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [login, setlogin] = useState('');
    const [password, setPassword] = useState('');
    const {error} = useSelector(state =>state.Login);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const user  = {
            login,
            password,
            history
        }
        dispatch(loginUser(user));
    }
    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Login"
            label="Login"
            name="login"
            autoFocus
            onChange={(e) => {
                setlogin(e.target.value)
            }}
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
            onChange={(e) => {
                setPassword(e.target.value)
            }}          
            />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick= {handleSubmit}
          >
            Sign In
          </Button>
          
          <div>
          <Typography variant="subtitle2" className={classes.error}>{error}</Typography>
          </div>
        </form>
      </div>
    </Container>
    )
}

export default Login;