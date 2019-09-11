import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MyButton from "./MyButton";
import AddIcon from "@material-ui/icons/Add";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [post, setPost] = React.useState("");

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    console.log("a", post);
    // const postId = props.post.id;
    console.log("ba", );
    props.submitPost(post);
    setOpen(false);
  }

  return (
    <div>
      <MyButton tip="Add A new Post" btnClassName="button" onClick={handleClickOpen}>
              <AddIcon
                color="primary"
              />
            </MyButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Post</DialogTitle>
        <DialogContent>
          <DialogContentText>Add a Post</DialogContentText>
          <TextField
            onChange={e => setPost(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Post"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}