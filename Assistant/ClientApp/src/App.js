import React, { Component } from 'react';
import { Route } from 'react-router';
// import { Router } from '@reach/router';
import { Layout } from './components/Layout';
import  Home from './components/Home';
import { FetchData } from './components/FetchData';
import ContextAlarm from './components/ContextAlarm';
import SearchField from './components/Wikipedia/SearchField'
// import './custom.css';
// import { OpenAppContext } from './Context/OpenAppContext';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        {/* <OpenAppContext> */}
          <Route exact path='/' component={Home} />
          <Route path='/contextAlarm' component={ContextAlarm} />
          <Route path='/fetch-data' component={FetchData} />
          <Route path='/wikipedia' component={SearchField} />
        {/* </OpenAppContext> */}
      </Layout>
    );
  }
}
