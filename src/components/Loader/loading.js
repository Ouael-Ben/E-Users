import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) =>
  createStyles({
    fabProgress: {
      color: props => props.color,
    }
  }),
);
export default function Loading(props) {
    const classes = useStyles(props);
    const {isLoading, size} = props;
    return (
        <div>
            {
                isLoading && <CircularProgress size={size} className={classes.fabProgress} />
            }
        </div>
    )
}
