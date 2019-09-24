import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import MyButton from "./MyButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import AddPostForm from "../components/AddPostForm";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20,
    maxWidth: 600,
    minHeight: 170,
    marginLeft: 170
  },
  image: {
    minWidth: 250,
    objectFit: "cover"
  },
  content: {
    padding: 25,
    objectFit: "cover"
  }
};


export class PostCard extends Component {
 

 

  submitComment(postId, comment) {
    const formData = {
      comment: comment,
      postId: postId
    };
    console.log("tee");
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => console.log("commentPost", data));
  }


  render() {
    console.log("this", this.props.post.like_count);

    const { classes } = this.props;

    dayjs.extend(relativeTime);
    
    const likeButton = this.props.post.like_count !== null ? (
    
      <MyButton
        tip="Like"
        
        onClick={(e) => this.likePost(e, this.props.post)}
      >
        <FavoriteBorder color="primary" />
      </MyButton>
    ) : (
      <MyButton
        tip="Undo Like"
        onClick={(e) => this.unLikePost(e, this.props.post)}
      >
        <FavoriteIcon color="primary" />
      </MyButton>
    );


    return (
  
       this.props.post ?
      <div>
        <br></br>
        <Card className={classes.card}>
          <CardMedia
            className={classes.image}
            image={this.props.post.user.img_url}
            title="Profile image"
          />
          <CardContent className={classes.content}>
            <Typography
              variant="h5"
              component={Link}
              to={`/users/${this.props.post.user.username}`}
            >
              {" "}
              {this.props.post.user.username}{" "}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {dayjs(this.props.post.user.created_at).fromNow()}
            </Typography>
            <Typography variant="body1">{this.props.post.content}</Typography>
            {likeButton}
            <span> {this.props.post.like_count} Likes</span>
            <AddPostForm
              post={this.props.post}
              submitComment={this.submitComment}
            />
            {/* <span>{this.props.post} comments</span> */}
          </CardContent>
        </Card>
      </div> : <div>loading</div>
    );
  }
}

export default withStyles(styles)(PostCard);
