import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStacks, deleteStack } from '../../actions';

class StackList extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchStacks();
  }

  renderStacks() {
    return this.props.stacks.map(stack => {
      return (
          <div key={stack._id} className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{stack.title}</span>
                <span className="new badge" data-badge-caption="Supplements">{stack.supplements.length}</span>
                <p>
                  Created on: {new Date(stack.dateCreated).toLocaleDateString()}
                </p>
              </div>
              <div className="card-action">
                <Link
                  to={`/stack/${stack._id}`}
                >
                  View
                </Link>
                <a href="#" onClick={() => this.props.deleteStack(stack._id, this.props.history)}>Delete</a>
              </div>
            </div>
          </div>
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
