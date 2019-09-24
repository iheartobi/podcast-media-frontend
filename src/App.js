import React from "react";
import "./App.css";
import PodcastContainer from "./containers/PodcastContainer";
import Homepage from "./pages/homepage";
import UserProfile from "./components/UserProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import EditUser from "./components/EditUser";
import UserContainer from "./containers/UserContainer";
import UserCard from "./components/UserCard";
import Landing from "./pages/landing";




export class App extends React.Component {
  constructor() {
    super();
    this.state = {
    
      podcasts: [],
      podcast: {},
      myPodcasts: [],
      clicked: false, 
      userInput: ''
    };
  }

  abortController = new AbortController();
  

  componentDidMount() {
   
    fetch(
      "http://localhost:3000/podcasts",
      { signal: this.abortController.signal },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
      }
    )
      .then(res => res.json())
      .then(podcasts => {
        let podcastData = podcasts.map(podcast => {
          podcast.myPodcast = false;
          return podcast;
        });
        this.setState({
          podcasts: podcastData
        });
      });
      
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  

  addToMyPodcasts = (e, podcast) => {
    if (podcast.myPodcast) {
      return null;
    } else {
      podcast.myPodcast = true;
      this.setState({ myPodcasts: [...this.state.myPodcasts, podcast] });
    }
  };

  removePodcast = (e, podcast) => {
    if (podcast.myPodcast) {
      let removePodcasts = this.state.myPodcasts.filter(
        myPod => myPod.id !== podcast.id
      );
      podcast.myPodcast = false;
      this.setState({ myPodcasts: removePodcasts });
    } else return null;
  };

  render() {
    return (
      <div className="App">
      <head><link href="https://fonts.googleapis.com/css?family=Chivo|Cormorant+Garamond|Fredoka+One|Monoton|Montserrat+Alternates&display=swap" rel="stylesheet"/>></head>
        
          <Router>
            <Route exact path="/" render={() => <Landing />} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Switch>
              {/* <Layout>  */}
              <Route
                exact
                path="/homepage"
                render={() => (
                  <Homepage  />
                )}
              />
              <Route
                exact
                path="/profile"
                render={() => (
                  <UserProfile
                    myPodcasts={this.state.myPodcasts}
                    removePodcast={this.removePodcast}
                  />
                )}
              />
              <Route
                exact
                path="/editUser"
                render={() => <EditUser  />}
              />
              {/* <Route
                render={() => <Search onChange={this.handleChange}  />}
              /> */}
              <Route
                exact
                path="/podcasts"
                render={() => (
                  <PodcastContainer
                  
                    podcasts={this.state.podcasts}
                    onClick={this.addToMyPodcasts}
                    user={this.state.user}
                  />
                  
                )}
              />
              <Route
                exact
                path="/users"
                render={() => (
                  <UserContainer
                    users={this.state.users}
                    user={this.state.user}
                  />
                )}
              />
              <Route
                exact
                path="/oneuser"
                render={() => <UserCard user={this.state.user} />}
              />
              {/* <Route path="/" render={() => <Homepage />} /> */}
              {/* </Layout> */}
            </Switch>
          </Router>
        
      </div>
    );
  }
}

export default App;
