import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    maxWidth: 100,
  },
  img: {
    maxWidth: 100,
    height: "auto",
  },
});

export default function LibFascCard(props) {
  const classes = useStyles();
  const imgPath = process.env.PUBLIC_URL + "/images/cards/" + props.cardType + ".png";

  return (
    <Card className={classes.card}>
      <CardMedia title={props.cardType + "card"}>
        <img className={classes.img} src={imgPath} alt={props.cardType + "card"}/>
      </CardMedia>
    </Card>
  );
}
