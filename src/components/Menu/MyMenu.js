import React,{Fragment} from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
    
  }),
);
const ButtonStyled = (name) =>{ 
    const classes = useStyles();
    return (
        <Link to='/users' className={classes.link}>
            <Button color='inherit' className={classes.menuButton} >
                {name}
            </Button>
        </Link>
        )
    };

function MyMenu() {
    return (
        <div>
            {ButtonStyled("Utilisateur")}
            {ButtonStyled("Perimetre")}
            {ButtonStyled("Logout")}
        </div>
    )
}
export default MyMenu;

