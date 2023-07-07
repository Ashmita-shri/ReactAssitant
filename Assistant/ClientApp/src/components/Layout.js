import React, { Component } from 'react';
import { Container } from 'reactstrap';
// import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className='vh-100 d-flex align-items-center justify-content-center flex-column'>
        {/* <NavMenu /> */}
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
