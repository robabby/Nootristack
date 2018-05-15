import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStacks, deleteStack } from '../../actions';

import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class StackList extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchStacks();
  }

  renderStacks() {
    return this.props.stacks.map(stack => {
      return (
          <Card key={stack._id}>
            <CardHeader
              title={stack.title}
              subtitle={`Created on: ${new Date(stack.dateCreated).toLocaleDateString()}`}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <FlatButton label="View" href={`/stack/${stack._id}`} primary={true} />
              <FlatButton label="Delete" secondary={true} onClick={() => this.props.deleteStack(stack._id, this.props.history)} />
            </CardActions>
          </Card>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderStacks()}
      </div>
    );
  }
}

function mapStateToProps({ stacks }) {
  return { stacks };
}


export default connect(mapStateToProps, { fetchStacks, deleteStack })(withRouter(StackList));
