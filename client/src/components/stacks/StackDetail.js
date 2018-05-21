import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStack } from '../../actions';

import LoadingSpinner from '../utils/LoadingSpinner';
import SupplementTable from './SupplementTable';

class StackDetail extends Component {
  state = {
    loading: true
  }
  async componentWillMount() {
    await this.props.fetchStack(this.props.match.params.id);

    this.setState({ loading: false });
  }

  renderContent() {
    const { supplements } = this.props.stack;

    if (supplements) {
      return <SupplementTable data={supplements} />
    }

    return (
      <LoadingSpinner />
    )

  }

  render() {
    let { title, notes } = this.props.stack;

    return (
      <div className="container">
        <h3>{title}</h3>
        <p>
          {notes}
        </p>
        {this.renderContent()}
      </div>
    );

  }
}

function mapStateToProps({ stack }) {
  return { stack };
}

export default connect(mapStateToProps, { fetchStack })(StackDetail);
