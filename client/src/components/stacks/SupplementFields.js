// StackNew shows StackForm and StackFormReview
import _ from 'lodash';
import React from 'react';
import { Field } from 'redux-form';
import SupplementField from './SupplementField';

export default ({ fields, supplementFields, meta: { error, touched } }) => {

  return (
    <div className="row">
      {fields.map((supplement, index) => {
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
        // return (
        //   <div key={index}>
        //     {/* <div className="input-field">
        //       <label htmlFor={name}>{label}</label>
        //       <input type={type} {...input} style={{ marginBottom: '5px' }} />
        //       <div className="red-text" style={{ marginBottom: '20px' }}>
        //         {touched && error}
        //       </div>
        //     </div> */}
        //     <button
        //       type="button"
        //       title="Remove Member"
        //       className="red btn-flat white-text"
        //       onClick={() => fields.remove(index)}
        //     >
        //       <i className="material-icons">clear</i>
        //     </button>
        //   </div>
        // );
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
