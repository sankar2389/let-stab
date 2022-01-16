import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import './HeroSection.css';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
//import 'bootstrap/dist/css/bootstrap.min.css'

const styles = (theme) => ({
  root: {
    margin: 0,
    // padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
 
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
  
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          {/* <CloseIcon /> */}
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);



function HeroSection() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  
  return (
    <div className='hero-container'>
      <video src='/videos/letstab.mp4' autoPlay loop muted />
      <div className='hero-btns'>
        <Button variant="danger" className='orderbut' autoFocus onClick={handleClickOpen}>
          Order Now
        </Button>
        <Dialog  onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          
          <DialogContent dividers>
          <iframe className='iframes' src='https://docs.google.com/forms/d/e/1FAIpQLSfFQv11dPQ_XmICqwzwBQLIh9nXX6W5kESYrWEP38OTL2dlkQ/viewform?usp=sf_link' height="490.5px" width="500px"></iframe>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="outline-dark">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default HeroSection;
