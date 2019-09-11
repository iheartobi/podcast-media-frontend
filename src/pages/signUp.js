
import React from "react";
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import PodMic from '../assets/blue_mic.jpg'



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
    },
    backgroundContainer: {
      backgroundImage: `url(${PodMic})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      // width: `calc(100vw + 48px)`,
      margin: -24,
      height: 900
    }
   
    
}

 class signUp extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      loading: false
    };

  }
  
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };


  handleSubmit = e => {
    
    e.preventDefault();
    this.setState({
      loading: true
    })
    const values = {
      user: { username: this.state.username, email: this.state.email, password: this.state.password }
    };
    // console.log(values);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(data => {
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt)
        localStorage.setItem("userId", data.user.id)
        this.setState({ loading: false})
        this.setState({user: data})
        this.props.history.push('/profile')
        console.log(data);
      } else {
        alert("Incorrect Username or Password")
        this.props.history.push('/signUp') 
        this.setState({loading: false})
      }
    }).catch(err => {
        this.setState({
          loading: false
        })
    })
  };

  render() {

    const { classes } = this.props;
    const { loading } = this.state;
    return (
      <div style={styles.backgroundContainer}>
      <Grid container className={classes.form}>
        <Grid item sm/>
        <Grid style={{marginTop: 200}} item sm>
          <Typography variant="h2" className={classes.pageTitle}>
            Sign Up
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField onChange={this.handleChange} id="username" type="username" name="username" label="Username" 
            value={this.state.username} className={classes.TextField} fullWidth>
            </TextField>
            <TextField onChange={this.handleChange} id="email" type="email" name="email" label="Email" 
            value={this.state.email} className={classes.TextField} fullWidth>
            </TextField>
            <TextField  onChange={this.handleChange} id="password" type="password" name="password" label="Password" 
            value={this.state.password} className={classes.TextField} fullWidth>
            </TextField>
            <Button className={classes.button} type="submit" disabled={loading} variant="contained" fullWidth>Submit
            {loading && (
              <CircularProgress size={30} className={classes.progress}/>
            )}
            </Button>
            <br></br>
            <br></br>
            <medium>Already Have an account? Login <Link to='/login'>Here</Link></medium>
          </form>
        </Grid>
        <Grid item sm/>
      </Grid>
      </div>
    )
  }
}





export default withRouter((withStyles(styles)(signUp)));