import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionViewList from 'material-ui/svg-icons/action/view-list';

class AppDrawer extends Component {
  render() {
    return (
      <Drawer
        docked={false}
        open={this.props.drawerOpen}
        onRequestChange={() => this.props.toggleDrawer()}
      >
        <List>
          <Subheader>Stacks</Subheader>
          <ListItem
            primaryText="Create New Stack"
            containerElement={<Link to="/stacks/new" />}
            rightIcon={<ContentAdd />}
            onClick={() => this.props.toggleDrawer()}
          />
          <ListItem
            primaryText="View Stacks"
            containerElement={<Link to="/stacks" />}
            rightIcon={<ActionViewList />}
            onClick={() => this.props.toggleDrawer()}
          />
        </List>
        <Divider />
        <List>
          <Subheader>Supplements</Subheader>
          <ListItem
            primaryText="Add New Supplements"
            rightIcon={<ContentAdd />}
          />
          <ListItem
            primaryText="View Current Inventory"
            rightIcon={<ActionViewList />}
          />
        </List>
      </Drawer>
    )
  }
}

export default AppDrawer;
