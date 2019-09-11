import React, { Component } from 'react'
import PodcastCard from '../components/PodcastCard'
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/NavBar'

export class PodcastContainer extends Component {

    state = {
      myPodcasts: [],
      clicked: false
    }

    componentDidMount(){
      
    }
  render() {
 
    let allPodcasts = this.props.podcasts? (
      this.props.podcasts.map(podcast => <PodcastCard onClick={this.props.onClick} key={podcast.id} podcast={podcast}/>)
  ) : <p>Loading...</p>

    return (
        <div>
          <div className="nav-bar">
            <NavBar/>
            </div>
            
          <Grid style={{marginTop: 150}} container spacing={16}>
            <Grid item sm={4} xs={12}>
             {/* <UserProfile /> */}
            </Grid>
            <Grid item sm={6} xs={12}>
            {allPodcasts}  
            </Grid>
          </Grid>
        </div>
   
    )
  }
}



export default (PodcastContainer)
