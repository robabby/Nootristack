// StackNew shows StackForm and StackFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import StackForm from './StackForm';
import StackFormReview from './StackFormReview';

class StackNew extends Component {
  state = {
    showFormReview: false
  }

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <StackFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <StackForm
        onStackSubmit={() => this.setState({ showFormReview: true })}
      />
    )
  }

  render() {
    return (
      <div className="container">
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'stackForm'
})(StackNew);
