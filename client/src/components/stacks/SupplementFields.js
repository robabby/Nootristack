// StackNew shows StackForm and StackFormReview
import _ from 'lodash';
import React from 'react';
import { Field } from 'redux-form';
import SupplementField from './SupplementField';

export default ({ fields, supplementFields, meta: { error, touched } }) => {
  let renderFields = (supplement) => {
    return _.map(supplementFields, ({ type, label, name, testVal }) => {
      console.log(testVal);
      return (
        <Field
          key={name}
          component={SupplementField}
          type={type}
          label={label}
          name={`${supplement}.${name}`}
          testVal={testVal}
        />
      );
    });
  };
  return (
    <div>
      {fields.map((supplement, index) => {
        return (
          <div key={index} className="row">
            <div className="col s2 push-s10">
              <button
                type="button"
                title="Remove Supplement"
                className="red btn-flat white-text right"
                onClick={() => fields.remove(index)}
              >
                <i className="material-icons">clear</i>
              </button>
            </div>
            {renderFields(supplement)}
          </div>
        );
      })}
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
