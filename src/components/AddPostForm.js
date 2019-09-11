import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MyButton from "./MyButton";
import ChatIcon from "@material-ui/icons/Chat";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = React.useState("");

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    console.log("a", props);
    const postId = props.post.id;
    console.log("ba", postId);
    props.submitComment(postId, comment);
    setOpen(false);
  }

  return (
    <div>
      <MyButton tip="comments" placement="top" onClick={handleClickOpen}>
        <ChatIcon color="primary" />
      </MyButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Comment</DialogTitle>
        <DialogContent>
          <DialogContentText>Add a comment</DialogContentText>
          <TextField
            onChange={e => setComment(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Comment"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add Comment
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
