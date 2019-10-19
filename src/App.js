import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';
import NavBarBrand from 'react-bootstrap/NavBarBrand';
import Nav from 'react-bootstrap/Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Vy Huynh",
      headerLinks: [
        {title: "Home", path: "/"},
        {title: "About", path: "/about"},
        {title: "Contact", path: "/home"}
      ],
      home: {
        title: "Vy Huynh",
        subTitle: "Projects I've worked on",
        text: "Checkout my projects!"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Let's Talk"
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <NavBar className="border-bottom" bg="transparent" expand="lg">
            <NavBar.Brand>Vy Huynh</NavBar.Brand>

            <NavBar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <NavBar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/">About</Link>
              <Link className="nav-link" to="/">Contact</Link>
            </Nav>
            </NavBar.Collapse>
          </NavBar>

        </Container>
      </Router>
    );
  }

}

export default App;
