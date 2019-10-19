import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';
import NavBarBrand from 'react-bootstrap/NavBarBrand';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Projects from './pages/Projects'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Vy Huynh",
      headerLinks: [
        {title: "Home", path: "/"},
        {title: "About", path: "/about"},
        {title: "Contact", path: "/contact"}
      ],
      home: {
        title: "Spontaneous Power.",
        subTitle: "creativity + fun + crazy",
        text: ":-)"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Let's Talk"
      },
      projects: {
        text: "What I have been working on :)"
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
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/projects">Projects</Link>
              <Link className="nav-link" to="/contact">Contact</Link>

            </Nav>
            </NavBar.Collapse>
          </NavBar> 


          <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
          <Route path="/about" exact render={() => <About title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text}/>}/>
          <Route path="/projects" exact render={() => <Projects title={this.state.projects.title} subTitle={this.state.projects.subTitle} text={this.state.projects.text}/>}/>
          <Route path="/contact" exact render={() => <Contact title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
          <Footer/>
        </Container>
      </Router>
    );
  }

}

export default App;
