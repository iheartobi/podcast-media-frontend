import React, { Component } from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'

 const API = 'https://listen-api.listennotes.com/api/v2/search'
export class Search extends Component {


  // state = {
  //   query: '',
  //   results: []
  // }
  // state = {
  //   search: '',
  //   filteredPodcasts: [],
  // }

 
   
  // getInfo = () => {
  //   fetch(`${API}?=${this.state.query}&sort_by_date=0&type=podcast&offset=0&len_min=10&len_max=30&published_before=1390190241000&published_after=0&only_in=title%2Cdescription%publisher&language=English&safe_mode=1`,{
  //     method: 'GET',
  //     headers: {
  //       'X-ListenAPI-Key': '8f75a208b856480795d5f19b5f0a7150'
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       results: data
  //     })
  //   })
  // }

  // handleInputChange = () => {
  //   this.setState({
  //     query: this.search.value
  //   }, () => {
  //     if (this.state.query && this.state.query.length > 1) {
  //       if (this.state.query.length % 2 === 0) {
  //         this.getInfo()
  //       }
  //     } 
  //   })
  // }
 

  handleChange = (e) => {
    this.setState({search: e.target.value})
    console.log(this.state)
  }

  
      handleClick = (e) => {
      
          let newPodcasts =  this.props.podcasts.filter(podcast => podcast.title.toLowerCase().includes(this.state.search)) 
        
        this.setState({filteredPodcasts: newPodcasts})
        console.log(this.state)
      }
    
      
  render() {
    return (
      <div>
    {/* <Form onChange={this.handleChange} inline>
      <FormControl  type="text" name="search" placeholder="Search Podcasts" ref={input => this.search = input} className="mr-sm-2" />
      <Button  onClick={this.handleClick}  variant="outline-info">Search</Button>
    </Form>   */}


    
      </div>
    )
  }
}



export default Search