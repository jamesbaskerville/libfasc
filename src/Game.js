import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import CardGrid from './CardGrid';

import { playAudio } from './utils';

const useStyles = makeStyles(theme => ({
  guess: {
    backgroundColor: "white",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  guessButton: {
    margin: theme.spacing(2),
    fontSize: 40,
  },
  slapArea: {
    flexGrow: 1,
  },
  cardGrid: {
    backgroundColor: "gainsboro",
    minHeight: 160 + theme.spacing(8) * 2,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const slapSoundPath = process.env.PUBLIC_URL + "sounds/slap.m4a";

// play slap with random volume between 0.3 and 1
const playSlap = () => {
  playAudio(slapSoundPath, Math.random() * 0.7 + 0.3)
}

class Guess extends React.Component {
  render() {
    return (
      <Box className={this.props.classes.guess}>
        <Button
          variant="outlined"
          className={this.props.classes.guessButton}
          color="primary"
          onClick={() => this.props.onGuess("liberal")}
          value="liberal">
          LIB
        </Button>
        <Button
          variant="outlined"
          className={this.props.classes.guessButton}
          color="secondary"
          onClick={() => this.props.onGuess("fascist")}
          value="fascist">
          FASC
        </Button>
      </Box>
    );
  }
}

function GuessWrapper(props) {
  const classes = useStyles();
  return (
    <Guess
      classes={classes}
      cardNumber={props.cardNumber}
      onGuess={props.onGuess}
      onFailure={props.onFailure}
    />
  );
}

function SlapArea(props) {
  const classes = useStyles();
  return (
    <Box className={classes.slapArea} onClick={() => {playSlap()}} />
  );
}

function ResultGrid(props) {
  const classes = useStyles();
  return (
    <Box className={classes.cardGrid}>
      <CardGrid cards={props.cards} maxIndex={props.cardNumber} />
    </Box>
  );
}

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      best: 0,
    }
  }

  resetGame() {
    this.props.onGameEnd(this.state.counter);
    this.setState({
      counter: 0
    });
  }

  onGuess = (guess) => {
    const actual = this.props.cards[this.state.counter].cardType;

    if (guess === actual) {
      playSlap();
      this.setState((prevState, props) => ({
        counter: prevState.counter + 1
      }));
    } else {
      this.endGame();
    }
  }

  endGame = () => {
    if (this.state.counter >= this.state.best) {
      const newBest = this.state.counter;
      this.setState({
        best: newBest
      });
    }
    this.resetGame();
  }

  render() {
    return (
      <React.Fragment>
        <main style={{ width: '100%' }}>
          <Container maxWidth="lg">
            <Box display="flex">
              <SlapArea />
              <GuessWrapper
                onGuess={this.onGuess}
                cardNumber={this.state.counter} />
              <SlapArea />
            </Box>
            <ResultGrid
              cards={this.props.cards}
              cardNumber={this.state.counter} />
          </Container>
        </main>
      </React.Fragment>
    );
  }
}
