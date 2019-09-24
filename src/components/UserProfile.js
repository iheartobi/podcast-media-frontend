import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles'
import NavBar from '../components/NavBar'
import Grid from "@material-ui/core/Grid";
import UserCard from "../components/UserCard";
import PodcastCard from '../components/PodcastCard'

const styles = {
    paper:{
        padding: 20,
        maxWidth: 300,
        marginLeft: 170
    },
    profile: {
        '& .image-wrapper': {
          textAlign: 'center',
          position: 'relative',
          '& button': {
            position: 'absolute',
            top: '80%',
            left: '70%'
          }
        },
        '& .profile-image': {
          width: 200,
          height: 200,
          objectFit: 'cover',
          maxWidth: '100%',
          borderRadius: '50%'
        },
        '& .profile-details': {
          textAlign: 'center',
          '& span, svg': {
            verticalAlign: 'middle'
          },
          '& a': {
            color: '#00bcd4'
          }
        },
        '& hr': {
          border: 'none',
          margin: '0 0 10px 0'
        },
        '& svg.button': {
          '&:hover': {
            cursor: 'pointer'
          }
        }
      },

}

class UserProfile extends React.Component{

  state = {
    img_url: "",
    user: {}
  }

  componentDidMount(){
    fetch(`http://localhost:3000/users/${localStorage.getItem("userId")}`,{
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`
      }
    })
      .then(res => res.json())
      .then( data => this.setState({
        user: data
      }))
  }

  // handleImageChange = (e) => {
  //   const image = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append('image', image, image.name);
  //   const values = {
  //             img_url: this.state.img_url 
  //   };
    
  //   fetch(`http://localhost:3000/users/${localStorage.getItem("userId")}` + formData,{
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${localStorage.getItem("jwt")}`
  //     },
  //     body: JSON.stringify(values)
  //   })
  //     .then(res => res.json())
  //       .then(data => { 
  //         if (data.jwt) {
  //           window.history.href=("/profile")
           
  //         } else {
  //             alert("Could Not Update Please Try Again")
  //             window.history.href=("/editUser")
  //             this.setState({loading: false})
  //         }
  //       }).catch(err => {
  //         this.setState({
  //           loading: false
  //         })
  //     })
  //}

  handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput')
    fileInput.click()
  }

    render(){
      
      const myPods = this.props.myPodcasts && this.props.myPodcasts.map(podcast => <PodcastCard 
        removePodcast={this.props.removePodcast} 
        key={podcast.id} 
        podcast={podcast}/> )

      console.log("this is where u are", this.props.myPodcasts)
    
           return( 
            <div>
        <div className="nav-bar">
          <NavBar />
        </div>
        <Grid className="gridprofile" container spacing={16}>
          <Grid className="profile" item sm={8} xs={12}>
            <br></br>
            <br></br>
            <span>
              <h2>My Profile..</h2>{" "}
            </span>
            <UserCard className="profile" user={this.state.user.user} />
            
          </Grid>
          <Grid className="profile" style={{ marginTop: 100 }} item sm={4} xs={12}>
          {myPods}
          </Grid>
        </Grid>
      </div>
           
           )}
          }


export default (withStyles(styles)(UserProfile));



