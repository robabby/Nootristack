import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStack } from '../../actions';

class StackDetail extends Component {
  async componentDidMount() {
    await this.props.fetchStack(this.props.match.params.id);
    console.log(this.props.stack);
  }

  render() {
    let { title } = this.props.stack;
    return (
      <div>
        <h3>{title}</h3>
      </div>
    );
  }
}

function mapStateToProps({ stack }) {
  return { stack };
}

export default connect(mapStateToProps, { fetchStack })(StackDetail);
