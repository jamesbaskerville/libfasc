import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import LibFascCard from './LibFascCard';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function CardGrid(props) {
  const cards = props.cards;
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      {cards.map(card => (
        <Grid item key={card} xs={12} sm={6} md={4}>

          <LibFascCard
            key={card.key}
            className={classes.card}
            cardType={card.cardType}
          />
        </Grid>
      ))}
    </Grid>
  );
}
