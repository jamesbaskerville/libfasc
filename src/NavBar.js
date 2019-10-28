import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: "auto",
  },
  score: {
    paddingRight: 10,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            LibFasc
          </Typography>
          <Typography variant="h7" className={classes.score}>
            Top Score: {props.score}
          </Typography>
          <Button color="inherit">Play</Button>
          <Button color="inherit">Rules</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
