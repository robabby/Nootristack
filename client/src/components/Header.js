import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import AppDrawer from './AppDrawer';

class Header extends Component {
  state = {
    drawerOpen: false
  }

  toggleDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen });

  renderNavigation() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <FlatButton label="Login With Google" href="/auth/google" />
        );
      default:
        return (
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem
              primaryText={`Stacks: ${this.props.auth.stacks}`}
              containerElement={<Link to="/stacks" />}
            />
            <MenuItem
              primaryText="Log out"
              containerElement={<a href="/api/logout" />}
            />
          </IconMenu>
        );
    }
  }

  renderAppBarIcon() {
    let icon = this.state.drawerOpen ? <NavigationClose /> : <NavigationMenu />

    return (
      <IconButton onClick={() => this.toggleDrawer()}>
        {icon}
      </IconButton>
    )
  }

  render() {
    return (
      <div>
        <AppBar
          title={<Link className="app-title" to={this.props.auth ? '/stacks' : '/'}>Nootristack</Link>}
          iconElementLeft={this.renderAppBarIcon()}
          iconElementRight={this.renderNavigation()}
        />
        <AppDrawer drawerOpen={this.state.drawerOpen} toggleDrawer={this.toggleDrawer} />
      </div>
    );
  }
}

// { auth } is destructured out of /state/
function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);
