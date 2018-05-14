import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';
import StackField from './StackField';
import SupplementFields from './SupplementFields';

const STACK_FIELDS = [
  { type: 'text', label: 'Stack Title', name: 'title', errorMsg: 'You must provide a title' },
  { type: 'checkbox', label: 'Current Stack', name: 'isActive' },
];

const SUPPLEMENT_FIELDS = [
  { type: 'text', label: 'Supplement Title', name: 'title', errorMsg: 'You must provide a name' },
  { type: 'number', label: 'Bottle Size', name: 'bottleSize', errorMsg: 'You must provide a size' },
  { type: 'number', label: 'Number of Bottles', name: 'quantity' },
  { type: 'text', label: 'Dosage', name: 'dose', errorMsg: 'You must provide a dose' },
  { type: 'number', label: 'Serving Size', name: 'servingSize' },
  { type: 'text', label: 'Price', name: 'price', errorMsg: 'You must provide a price' },
  { type: 'text', label: 'Merchant', name: 'merchant' },
  { type: 'text', label: 'Examine Link', name: 'examineLink' },
];

class StackForm extends Component {
  renderStackFields() {
    return _.map(STACK_FIELDS, ({ type, label, name }) => {
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
        <form
          onSubmit={this.props.handleSubmit(values => console.log(values))}
        >
          {this.renderStackFields()}
          <br />
          <h4>Supplements</h4>

          <FieldArray name="supplements" component={SupplementFields} supplementFields={SUPPLEMENT_FIELDS} />
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

  console.log('/values/', values);
  // console.log('/errors/', errors);

  _.each(STACK_FIELDS, ({ name, errorMsg }) => {
    if (!values[name]) {
      errors[name] = errorMsg;
    }
  });

  if (!values.supplements || !values.supplements.length) {
    errors.supplements = { _error: 'At least one member must be entered' };
  } else {
    const supplementsArrayErrors = [];
    values.supplements.forEach((supplement, index) => {
      const supplementErrors = {};
      _.each(SUPPLEMENT_FIELDS, ({ name, errorMsg }) => {

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
  validate,
  form: 'stackForm' // required property
})(StackForm);
