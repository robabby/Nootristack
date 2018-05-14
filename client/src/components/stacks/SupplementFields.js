// StackNew shows StackForm and StackFormReview
import _ from 'lodash';
import React from 'react';
import { Field } from 'redux-form';
import SupplementField from './SupplementField';

export default ({ fields, supplementFields, meta: { error, touched } }) => {
  let renderFields = (supplement) => {
    return _.map(supplementFields, ({ type, label, name }) => {
      return (
        <Field
          key={name}
          component={SupplementField}
          type={type}
          label={label}
          name={`${supplement}.${name}`}
        />
      );
    });
  };
  return (
    <div>
      <div className="row">
        {fields.map((supplement, index) => {
          return (
            <div key={index}>
              {renderFields(supplement)}
              <button
                type="button"
                title="Remove Supplement"
                className="red btn-flat white-text"
                onClick={() => fields.remove(index)}
              >
                <i className="material-icons">clear</i>
              </button>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className="teal btn-flat white-text"
        onClick={() => fields.push({})}
      >
        Add Supplement
        <i className="material-icons right">add</i>
      </button>
    </div>
  );
};
