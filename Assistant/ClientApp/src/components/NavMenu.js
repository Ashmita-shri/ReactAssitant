import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;
  // let styles = {
  //   // color:'violet',
  //     background-color: rgba(156, 80, 255, 0.37)
  // };
  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header className='w-100'>
         <div className='container'>
        <Navbar className="navbar-expand py-4" dark>
          <Container>
            <NavbarBrand tag={Link} to="/">Voice  Assistant</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark text" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark text" to="/contextAlarm">Clock</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark text" to="/fetch-data">Workpad</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark text" to="/wikipedia">Wikipedia</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
        </div>
      </header>
    );
  }
}
