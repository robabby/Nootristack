import React from 'react';
import TextField from 'material-ui/TextField';

export default ({ input, label, type, testVal, meta: { error, touched } }) => {
  const { value, ...props } = input;
  let classList = 'input-field col';

  return (
    <div>
      <TextField
        floatingLabelText={label}
        errorText={touched && error}
        defaultValue={testVal}
        {...props}
      />
    </div>
  );
};
