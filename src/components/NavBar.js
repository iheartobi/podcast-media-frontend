import React from "react";
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';




class NavBar extends React.Component {

  handleLogout = (e) => {
    window.localStorage.clear()
    window.location.href = '/'
   }

  render(){
  return (
    <Navbar className="navbar" expand="lg" bg="dark" variant="dark">
    <Navbar.Brand className="navbar-brand" href="/">Podcast Media</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Nav className="mr-auto" >
      <Nav.Item><Link className="nav-link" to="/homepage">Home</Link></Nav.Item>
      <Nav.Item><Link className="nav-link" to="/profile">MyProfile</Link></Nav.Item>
      <Nav.Item><Link className="nav-link" to="/podcasts">Podcasts</Link></Nav.Item>
      
      
    </Nav>
    <Nav className="ml-auto nav-link">
    <Nav.Item><Link className="nav-link" to="/editUser">Edit Profile</Link></Nav.Item>
    <Nav.Item><Link onClick={this.handleLogout} className="nav-link" to="/">Logout</Link></Nav.Item>
    {/* <Search podcasts={this.props.podcasts} /> */}
    </Nav>
    
  </Navbar>
 
 
  );
}
}


export default NavBar;