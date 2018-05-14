import React,  { Component } from 'react';
// hooking up to the reduc store and connect to state
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">Login With Google</a></li>
        );
      default:
        return [
          <li key="1">Stacks: {this.props.auth.stacks}</li>,
          <li key="2"><a href="/api/logout">Log Out</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/stacks' : '/'}
            className="brand-logo left"
          >
            Nootristack
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

// { auth } is destructured out of /state/
function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);
