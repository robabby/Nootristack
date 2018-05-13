// StackNew shows StackForm and StackFormReview
import React from 'react';

export default ({ input, label, type, meta: { error, touched } }) => {
  const { name } = input;


  if (type === "text" || type === "number") {
    return (
      <div className="input-field">
        <label htmlFor={name}>{label}</label>
        <input type={type} {...input} style={{ marginBottom: '5px' }} />
        <div className="red-text" style={{ marginBottom: '20px' }}>
          {touched && error}
        </div>
      </div>
    );
  } else if (type === "checkbox") {
    const { value, ...checkbox } = input;
    const {
      checked,
      name,
      ...events
    } = checkbox;

    // console.log(events);

    return (
      <div>
        <label htmlFor={name}>
          <input type={type} name={name} checked={checked} {...events} />
          <span>{label}</span>
        </label>
      </div>
    );
  }
};
