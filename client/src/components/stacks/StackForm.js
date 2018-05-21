import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';
import StackField from './StackField';
import SupplementFields from './SupplementFields';

import RaisedButton from 'material-ui/RaisedButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

import stackFields from './config/stackFields.js'
import supplementFields from './config/supplementFields.js';

class StackForm extends Component {
  renderStackFields() {
    return _.map(stackFields, ({ type, label, name, testVal }) => {
      return (
        <Field
          key={name}
          component={StackField}
          type={type}
          label={label}
          name={name}
          testVal={testVal}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Create a new Stack</h2>
        <form
          onSubmit={this.props.handleSubmit(this.props.onStackSubmit)}
        >
          {this.renderStackFields()}
          <br />
          <h5>Supplements</h5>

          <FieldArray name="supplements" component={SupplementFields} supplementFields={supplementFields} />
          <br />
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <RaisedButton
              href="/stacks"
              label="Cancel"
              secondary={true}
            />
            <RaisedButton
              type="submit"
              label="Next"
              labelPosition="before"
              icon={<ChevronRight />}
              primary={true}
            />
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
