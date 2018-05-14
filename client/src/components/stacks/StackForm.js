import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';
import StackField from './StackField';
import SupplementFields from './SupplementFields';

import stackFields from './config/stackFields.js'
import supplementFields from './config/supplementFields.js';

class StackForm extends Component {
  renderStackFields() {
    return _.map(stackFields, ({ type, label, name }) => {
      return (
        <Field
          key={name}
          component={StackField}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h4>Create a new Stack</h4>
        <form
          onSubmit={this.props.handleSubmit(this.props.onStackSubmit)}
        >
          {this.renderStackFields()}
          <br />
          <h5>Supplements</h5>

          <FieldArray name="supplements" component={SupplementFields} supplementFields={supplementFields} />
          <br />
          <div style={{ marginTop: '20px' }}>
            <Link to="/stacks" className="red btn-flat white-text">
              Cancel
            </Link>
            <button type="submit" className="teal btn-flat right white-text">
              Next
              <i className="material-icons right">chevron_right</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(stackFields, ({ name, errorMsg }) => {
    if (!values[name]) {
      errors[name] = errorMsg;
    }
  });

  if (!values.supplements || !values.supplements.length) {
    // errors.supplements = { _error: 'At least one member must be entered' };
  } else {
    const supplementsArrayErrors = [];
    values.supplements.forEach((supplement, index) => {
      const supplementErrors = {};
      _.each(supplementFields, ({ name, errorMsg }) => {

        if (!supplement[name]) {
          const error = { [name]: errorMsg }
          _.defaults(supplementErrors, error)
        }
      })
      supplementsArrayErrors[index] = supplementErrors;
    })
    if (supplementsArrayErrors.length) {
      errors.supplements = supplementsArrayErrors;
    }
  }
  return errors;
}

export default reduxForm({
  form: 'stackForm', // required property
  validate,
  destroyOnUnmount: false
})(StackForm);
