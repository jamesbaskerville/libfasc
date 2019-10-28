import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import RulesModal from './RulesModal';

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

const rulesTitle = "LibFasc Rules"
const rulesText = "LibFasc is a simple but addicting game! \
  Your goal is to guess as many consective cards as possible, by \
  choosing either the 'Lib' or 'Fasc' button. The ratio is 6 Lib cards \
  to 11 Fasc cards."

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
          <RulesModal
            triggerText="Rules"
            title={rulesTitle}
            text={rulesText} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
