import React, { Component } from "react";
import PodcastCard from "../components/PodcastCard";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import { Form, Button, FormControl } from 'react-bootstrap'

export class PodcastContainer extends Component {
  state = {
    myPodcasts: [],
    clicked: false,
    search: "",
    filteredPodcasts: []
  };

  componentDidMount() {}

  handleChange = e => {
    this.setState({ search: e.target.value });
    console.log(this.state);
  };

  handleClick = e => {
    let newPodcasts = this.props.podcasts.filter(podcast =>
      podcast.title.toLowerCase().includes(this.state.search) || podcast.publisher.toLowerCase().includes(this.state.search)
    );

    this.setState({ filteredPodcasts: newPodcasts });
    console.log(this.state);
  };

  render() {
    let allPodcasts = this.props.podcasts ? (
      this.props.podcasts.map(podcast => (
        <PodcastCard
          myPodcasts={this.state.myPodcasts}
          onClick={this.props.onClick}
          key={podcast.id}
          podcast={podcast}
        />
      ))
    ) : (
      <p>Loading...</p>
    );

    return (
      <div>
       
    
        <div className="nav-bar">
          <NavBar podcasts={this.props.podcasts} />
          <Search />
        </div>
        <Form onChange={this.handleChange} inline>
          <FormControl
            type="text"
            name="search"
            placeholder="Search Podcasts"
            // ref={input => (this.search = input)}
            className="mr-sm-2"
          />
          <Button onClick={this.handleClick} variant="outline-info">
            Search
          </Button>
        </Form>
        <div>
      {this.state.filteredPodcasts.map(podcast => <PodcastCard onClick={e => this.props.onClick(e, this.props.podcast)} podcast={podcast}/>)}
    </div>
        <Grid style={{ marginTop: 150 }} container spacing={16}>
          <Grid item sm={4} xs={12}>
            {/* <UserProfile /> */}
          </Grid>
          <Grid item sm={6} xs={12}>
            {allPodcasts}
          </Grid>
        </Grid>

        
      </div>
    );
  }
}

export default PodcastContainer;
