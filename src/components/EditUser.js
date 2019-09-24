import React from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import NavBar from '../components/NavBar'



const styles = {
    form: {
      textAlign: 'center'
    },
    button: {
      position: 'relative',
      marginTop: 20
    },
    progress: {
      position: 'absolute'
    }
    
}

 class EditUser extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      img_url: "",
      email: "",
      loading: false
    };

  }

  

  handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput')
    fileInput.click()
  }
  
  handleChange = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

   handleLogout = (e) => {
    window.localStorage.clear()
    window.location.href = '/'
   }


  handleSubmit = e => {
    // console.log(e)
    e.persist()
    e.preventDefault();
    this.setState({
      loading: true
    })

    const values = {
      user: { username: this.state.username,  password: this.state.password, img_url: this.state.img_url, email: this.state.email }
    };
    // // console.log(values);
    // fetch(`http://localhost:3000/users/${localStorage.getItem("userId")}`,{
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${localStorage.getItem("jwt")}`
    //   },
    //   body: JSON.stringify(values)
      
    // })
    //   .then(res => res.json())
    //     .then(data => { 
    //       if (data.jwt) {
    //         window.history.href=("/profile")
    //         // console.log(data)
            
    //       } else {
    //           alert("Could Not Update Please Try Again")
    //           window.history.href=("/editUser")
    //           this.setState({loading: false})
    //       }
    //     }).catch(err => {
    //       this.setState({
    //         loading: false
    //       })
    //   })
  };

  render() {
    // console.log("Single", this.props.user)
  const { classes } = this.props;
  const { loading } = this.state;
  return (
    <div>
    <div className="nav-bar">
    <NavBar/>
    </div>
    <Grid style={{marginTop: 150}} container className={classes.form}>
      <Grid item sm/>
      <Grid item sm>
        <Typography variant="h2" className={classes.pageTitle}>
          Edit Profile
        </Typography>
        <form noValidate onSubmit={this.handleSubmit}>
          <TextField onChange={this.handleChange} id="username" type="username" name="username" label="Username" 
          value={this.state.username} ref={(value) => this.isNewUsername = value} className={classes.TextField} fullWidth>
          </TextField>
          <TextField  onChange={this.handleChange} id="password" type="password" name="password" label="Password" 
          value={this.state.password} ref={(value) => this.isNewPassword = value} className={classes.TextField} fullWidth>
          </TextField>
          <TextField onChange={this.handleChange} id="img_url" type="text" name="img_url" label="Image" 
          value={this.state.img_url} ref={(value) => this.isNewImg_Url = value}className={classes.TextField} fullWidth>
          </TextField>
          <TextField onChange={this.handleChange} id="email" type="email" name="email" label="Email" 
          value={this.state.email} ref={(value) => this.isNewEmail = value}className={classes.TextField} fullWidth>
          </TextField>
          
          
          <Button className={classes.button} type="submit" disabled={loading} variant="contained" fullWidth>Submit
          {loading && (
            <CircularProgress size={30} className={classes.progress}/>
          )}
          </Button>
          <br></br>
          <br></br>
          <medium>Want to Try Again Later? Logout <Link onClick={this.handleLogout}to='/'>Here</Link></medium>
        </form>
      </Grid>
      <Grid item sm/>
    </Grid>
    </div>
      
  )
}
}
export default (withStyles(styles)(EditUser))