import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import stackFields from './config/stackFields.js';
import supplementFields from './config/supplementFields.js';
import * as actions from '../../actions'

const StackFormReview = ({ onCancel, formValues, submitStack, history }) => {
  const reviewFields = _.map(stackFields, stackField => {
    let { name, label } = stackField
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your stack</h5>
      <div className="row">
        {reviewFields}
      </div>
      <button
        type="button"
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitStack(formValues, history)}
        className="green btn-flat white-text right"
      >
        Save Stack
        <i className="material-icons right">check</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    formValues: state.form.stackForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(StackFormReview));
