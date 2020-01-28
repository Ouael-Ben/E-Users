import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import { signUpUser } from './ressources/actions';
import Loading from '../../components/Loader/loading';

const useStyles = makeStyles( theme => ({
    inputs: {
      maxWidth: '350px',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    container: {
      paddingTop: '5%',
      textAlign: 'center',
    },
    paper: {
      width: '50%',
      margin: 'auto',
      paddingBottom: '5%',
      paddingTop: '5%',
      textAlign: 'center',
    },
    form: {
      marginTop: theme.spacing.unit * 4,
      '& > *': {
        marginTop: theme.spacing.unit * 2,
      },
    },
  }));
export default function Register() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [login, setlogin] = useState('');
    const [password, setpassword] = useState('');
    const [passwordConfirmation, setpasswordConfirmation] = useState('');

    const {isLoading,error} =  useSelector(state => state.Register);
    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
            login,
            password, 
            history
        }
        dispatch(signUpUser(user));
    }
    return (
        <div className={classes.container}>
          <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                     Register
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        name="login"
                        type="text"
                        label="login"
                        value={login}
                        onChange={(e)=>setlogin(e.target.value)}
                        className={classes.inputs}
                        fullWidth
                    />
                  <br />
                  <TextField
                    name="password"
                    type="password"
                    label="Mot de passe"
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}
                    className={classes.inputs}
                    inputProps={{
                      maxLength: 50,
                    }}
                    fullWidth
                  />
                  <br />
                  <TextField
                    type="password"
                    name="passwordConfirmation"
                    label="Confirmation du Mot de passe"
                    value={passwordConfirmation}
                    onChange={(e)=>setpasswordConfirmation(e.target.value)}
                    className={classes.inputs}
                    inputProps={{
                      maxLength: 50,
                    }}
                    fullWidth
                  />
                  <br />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={onSubmit}
                  >
                    {!isLoading ? 'Valider' : <Loading isLoading='true' size={15} color="white"/> }
                  </Button>
                </form>
           
          </Paper>
    
      </div>
    )
}
