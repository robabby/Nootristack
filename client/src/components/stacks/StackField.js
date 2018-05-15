// StackNew shows StackForm and StackFormReview
import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';


export default ({ input, label, type, meta: { error, touched } }) => {
  const { name } = input;


  if (type === "text" || type === "number") {
    return (
      <div>
        <TextField
          floatingLabelText={label}
          errorText={touched && error}
          {...input}
        />
      </div>
    );
  } else if (type === "checkbox") {
    const { value, ...checkbox } = input;
    const {
      checked,
      name,
      ...events
    } = checkbox;

    return (
      <div>
        <Checkbox
          label={label}
          checked={input.value ? true : false}
          onCheck={input.onChange}
        />
      </div>
    );
  }
};
