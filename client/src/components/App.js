import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import StackNew from './stacks/StackNew';
import StackDetail from './stacks/StackDetail';

import '../styles/scss/app.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          {/* BrowserRouter requires only one child */}
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/stacks" component={Dashboard} />
            <Route path="/stacks/new" component={StackNew} />
            <Route path="/stack/:id" component={StackDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
