// StackNew shows StackForm and StackFormReview
import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';


export default ({ input, label, type, testVal, meta: { error, touched } }) => {
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
  }
  if (type === "checkbox") {
    const { value, ...checkbox } = input;
    const {
      checked,
      name,
      ...events
    } = checkbox;

    return (
      <div style={{ marginTop: '20px' }}>
        <Checkbox
          label={label}
          checked={input.value ? true : false}
          onCheck={input.onChange}
        />
      </div>
    );
  }
  if (type === "textarea") {
    let { value, ...props } = input;
    console.log(testVal);
    return (
      <div>
        <TextField
          floatingLabelText={label}
          errorText={touched && error}
          defaultValue={testVal}
          multiLine={true}
          rows={3}
          rowsMax={5}
          {...props}
        />
      </div>
    );
  }
};
