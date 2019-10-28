import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import NavBar from './NavBar';
import Game from './Game';

import { generateCards, shuffle } from './utils';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const LIB_CARD_COUNT = 6;
const FASC_CARD_COUNT = 11;
const libCards = generateCards('liberal', LIB_CARD_COUNT);
const fascCards = generateCards('fascist', FASC_CARD_COUNT);
const allCards = shuffle(libCards.concat(fascCards));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://jamesbaskerville.github.io/libfasc/">
          LibFasc
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
}

export default function LibFasc() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Game cards={allCards}/>
      <Footer />
    </React.Fragment>
  );
}
