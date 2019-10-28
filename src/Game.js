import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import CardGrid from './CardGrid';

const useStyles = makeStyles(theme => ({
  guess: {
    backgroundColor: "gainsboro",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  guessButton: {
    margin: theme.spacing(1),
  },
  cardGrid: {
    backgroundColor: "darkgrey",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

function Guess(props) {
  const classes = useStyles();
  return (
    <Container className={classes.guess} maxWidth="lg">
      <Button
        variant="outlined"
        className={classes.guessButton}
        color="primary"
        onClick={props.onClick}
        value="liberal">
        LIB
      </Button>
      <Button
        variant="outlined"
        className={classes.guessButton}
        color="secondary"
        onClick={props.onClick}
        value="fascist">
        FASC
      </Button>
    </Container>
  );
}

function ResultGrid(props) {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <CardGrid cards={props.cards} index={props.index} />
    </Container>
  );
}

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    }
  }

  guessCard = (choice) => {
    const actual = this.props.cards[this.state.index].cardType;
    if (choice === actual) {
      this.state.index++;
    } else {
      this.endGame()
    }
  }

  endGame() {
    return;
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <Guess onClick={this.guessCard} />
          <ResultGrid cards={this.props.cards} index={this.state.index} />
        </main>
      </React.Fragment>
    );
  }
}
