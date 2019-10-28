import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 466,
  },
});

export default function LibFascCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={process.env.PUBLIC_URL + "/images/cards/" + props.cardType + ".png"}
        title={props.cardType + "card"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.cardType.toUpperCase()}
        </Typography>
      </CardContent>
    </Card>
  );
}
