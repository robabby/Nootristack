import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStack } from '../../actions';

import LoadingSpinner from '../utils/LoadingSpinner';

class StackDetail extends Component {
  state = {
    loading: true
  }
  async componentWillMount() {
    await this.props.fetchStack(this.props.match.params.id);
    this.setState({ loading: false })
    console.log(this.props.stack);
  }

  renderSupplements(supplements) {
    return supplements.map((supplement, index) => {
      return (
        <div key={supplement._id}>
          <div>{supplement.title}</div>
          <div>{supplement.bottleSize}</div>
          <div>{supplement.dose}</div>
          <div>{supplement.merchant}</div>
          <div>{supplement.price}</div>
          <div>{supplement.quantity} </div>
          <div>{supplement.servingSize}</div>
        </div>
      );
    });

  }

  render() {
    let { title, supplements } = this.props.stack;

    if (this.state.loading) {
      return (
        <LoadingSpinner />
      )
    }
    return (
      <div>
        <h3>{title}</h3>
        {this.renderSupplements(supplements)}
      </div>
    );

  }
}

function mapStateToProps({ stack }) {
  return { stack };
}

export default connect(mapStateToProps, { fetchStack })(StackDetail);
