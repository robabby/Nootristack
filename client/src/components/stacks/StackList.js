import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStacks } from '../../actions';

class StackList extends Component {
  componentDidMount() {
    this.props.fetchStacks();
  }

  renderStacks() {
    return this.props.stacks.map(stack => {
      return (
            <div key={stack._id} className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{stack.title}</span>
                <p className="right">
                  Created on: {new Date(stack.dateCreated).toLocaleDateString()}
                </p>
              </div>
              <div className="card-action">
                <Link
                  to={`/stack/${stack._id}`}
                >
                  View
                </Link>
                <a href="#">Delete</a>
              </div>
            </div>
      )
    })
  }

  render() {
    return (
      <div className="row">
        {this.renderStacks()}
      </div>
    );
  }
}

function mapStateToProps({ stacks }) {
  return { stacks };
}


export default connect(mapStateToProps, { fetchStacks})(StackList);
