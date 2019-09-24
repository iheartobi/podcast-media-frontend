import React from "react";
import Grid from "@material-ui/core/Grid";
import PostCard from "../components/PostCard";
import withStyles from '@material-ui/core/styles/withStyles';
import NavBar from "../components/NavBar";
import UserCard from "../components/UserCard";
import AddNewPost from "../components/AddNewPost";
import { MDBJumbotron, MDBContainer } from "mdbreact";




class homepage extends React.Component {
  constructor(){
    super()
    this.state = {
      podcasts: [],
      posts: [],
      user: {}
    };
  }
 
  abortController = new AbortController();

  

  componentDidMount() {
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
          console.log("all the posts", data);
          this.setState({
            posts: data
          });
        });
  }

  likedPost = () =>{
    if(this.state.posts.posts.likes_count && this.state.posts.posts.find(post => post.id === this.state.posts.posts.like_count))
    return true;
    else return false;
  }
  likePost = (e, posts) => {
  
    this.setState({posts: [...this.state.posts.posts.like_count + 1]}) 
  }
  unLikePost = (e, posts) => {
   this.setState({posts: [...this.props.posts.posts.like_count - 1]}) 
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  submitPost = (post)  => {
    const formData = {
      content: post,
      user_id: localStorage.getItem("userId")
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
      .then(post => {
       
       this.setState({posts: [...this.state.posts, post ]});
      //  this.forceUpdate()
      });
  }


  render() {
   

    console.log(" Post for Props", this.state.posts.map);
    // let reversePosts = this.state.posts.posts.reverse
    

    let allPosts = this.state.posts.posts ? (
      this.state.posts.posts.reverse().map(post => (
        <PostCard key={post.id} post={post} user={this.state.user.user} />
      ))
    ) : (
      <p>Loading...</p>
    );

    // let allComments = this.state.posts.posts.map(post =>  (<CommentCard/>))
  

    return (
      <div className="bg1">
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="jumbotron">
        <h1>Podcast Media</h1>
    </div>
        <Grid container spacing={16}>
          <Grid item sm={8} xs={12}>
            <AddNewPost post={this.state.post} submitPost={this.submitPost} />
            
            <span>
              <h2>Recent Posts..</h2>{" "}
            </span>
            {allPosts}
          </Grid>
          <Grid style={{ marginTop: 100 }} item sm={4} xs={12}>
            <UserCard user={this.state.user.user} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default (withStyles()(homepage))
