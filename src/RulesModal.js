import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    outline: 0,
    maxWidth: 400,
    height: "auto",
    boxShadow: theme.shadows[5],
    border: '1px solid #000',
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function RulesModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleOpen}>
        {props.triggerText}
      </Button>
      <Modal
        aria-labelledby="rules-modal-title"
        aria-describedby="rules-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="rules-modal-title">{props.title}</h2>
            <p id="rules-modal-description">{props.text}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
