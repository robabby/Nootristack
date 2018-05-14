import React from 'react';

export default ({ input, label, type, meta: { error, touched } }) => {
  const { name } = input;
  // console.log(input);
  return (
    <div className="input-field col s4">
      <label htmlFor={name}>{label}</label>
      <input type={type} {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
