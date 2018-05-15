import React from 'react';
import TextField from 'material-ui/TextField';

export default ({ input, label, type, testVal, meta: { error, touched } }) => {
  const { value, ...props } = input;
  let classList = 'input-field col';

  // if (name.includes('title')) {
  //   classList += ' s10 pull-s2';
  // } else if (name.includes('bottleSize') || name.includes('quantity') || name.includes('dose') || name.includes('servingSize')) {
  //   classList += ' s3';
  // } else {
  //   classList += ' s4';
  // }
  return (
    <div>
      <TextField
        floatingLabelText={label}
        errorText={touched && error}
        defaultValue={testVal}
        {...props}
      />

      {/* <label htmlFor={name}>{label}</label>
        <input type={type} {...input} value={testVal} style={{ marginBottom: '5px' }} />
        <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div> */}
    </div>
  );
};
