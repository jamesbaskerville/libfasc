import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import NavBar from './NavBar';
import CardGrid from './CardGrid';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://jamesbaskerville.github.io/libfasc/">
        LibFasc
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();
  const cards = [
    {key: "lib-card-1", cardType: "liberal"},
    {key: "fasc-card-1", cardType: "fascist"},
    {key: "lib-card-2", cardType: "liberal"},
    {key: "fasc-card-2", cardType: "fascist"},
    {key: "lib-card-3", cardType: "liberal"},
    {key: "fasc-card-3", cardType: "fascist"},

  ];

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Header */}
      <NavBar />
      {/* End header */}
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <CardGrid cards={cards} />
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
