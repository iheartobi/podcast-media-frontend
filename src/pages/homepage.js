import React from "react";
import Grid from "@material-ui/core/Grid";
import PostCard from "../components/PostCard";
import NavBar from "../components/NavBar";
import UserCard from "../components/UserCard";
import MyButton from "../components/MyButton";

import AddNewPost from "../components/AddNewPost";

class homepage extends React.Component {
  state = {
    posts: [],
    post: {},
    podcasts: [],
    user: {},
    likes: [],
    like: {}
  };
  abortController = new AbortController();

  submitPost(post) {
    const formData = {
      content: post,
      user_id: localStorage.getItem('userId')
    };
    console.log("tee");
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => console.log("newpost", data));
  }

  componentDidMount() {
    fetch(
      "http://localhost:3000/posts",
      { signal: this.abortController.signal },
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        // localStorage.setItem("postId", data.post.id)
        console.log("afdsfas", data);
        this.setState({
          posts: data
        });
      });

    fetch(`http://localhost:3000/users/${localStorage.getItem("userId")}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          user: data
        })
      );
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  // likePost = (e, like) =>{
  //   this.setState({like: [like, ...this.state.like]})
  //   }

  // unLikePost = (e, like) => {
  //       this.state.likes.filter(plike => plike.id === like.id)
  //       this.setState({likes: [...this.state.likes]})
  //     }

  // addPost = (post) => {
  //   this.setState({posts: [post, ...this.state.posts]})
  // }

  render() {
    console.log("here", this.state);

    console.log(" Post for Props", this.props);
    let allPosts = this.state.posts ? (
      this.state.posts.map(post => (
        <PostCard key={post.id} post={post} user={this.state.user} />
      ))
    ) : (
      <p>Loading...</p>
    );

    return (
      <div>
        <div className="nav-bar">
          <NavBar />
        </div>
        <Grid container spacing={16}>
          <Grid item sm={8} xs={12}>
            <AddNewPost post={this.state.post} submitPost={this.submitPost} />
            <br></br>
            <br></br>
            <span>
              <h2>Recent Posts..</h2>{" "}
            </span>
            {allPosts}
          </Grid>
          <Grid style={{ marginTop: 100 }} item sm={4} xs={12}>
            <UserCard user={this.state.user} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default homepage;
