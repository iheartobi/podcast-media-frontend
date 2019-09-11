import React, { Component } from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'


export class Search extends Component {

    constructor(){
        super()
        this.state = {
          search: ''
        }
      }
    
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
        console.log(this.state)
      }
      
      handleClick = (e) => {
        this.setState({search: e.target.value})
        this.props.dispatch({type: "SEARCH_PODCASTS", search: e.target.value})
        console.log(this.state)
      }
  render() {
    return (
      <div>
    <Form onChange={this.handleChange} inline>
      <FormControl  type="text" name="search" placeholder="Search Podcasts" className="mr-sm-2" />
      <Button  onClick={this.handleClick}  variant="outline-info">Search</Button>
    </Form>  
      </div>
    )
  }
}



export default Search