import React from 'react';
import Grid from '@material-ui/core/Grid';

import LibFascCard from './LibFascCard';

export default function CardGrid(props) {
  const cards = props.cards.slice(0, props.maxIndex);

  return (
    <Grid container spacing={1}>
      {cards.map(card => (
        <Grid item key={card.key}>
          <LibFascCard
            cardType={card.cardType}
          />
        </Grid>
      ))}
    </Grid>
  );
}
