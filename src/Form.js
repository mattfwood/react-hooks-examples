import React, { useState } from 'react';

/**
 * CUSTOM HOOKS
 */

// this custom hook could be used anywhere in your app, and you could avoid repeating the logic of something like onChange={this.handleChange} then creating a handleChange method that sets the state
const useFormData = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

const handleSubmit = (e, data) => {
  e.preventDefault();
  const inputs = { ...data };
  console.log(inputs);

  // send the inputs to an API, etc
};

const Form = () => {
  const name = useFormData('Dan');
  const email = useFormData('gaearon@react.com');

  const data = {
    name: name.value,
    email: email.value,
  };

  /**
   * a custom hook like "useFormData" can return    * the props you want to pass to an input, then  * they can be spread to any component
   */
  return (
    <form className="ui form" onSubmit={e => handleSubmit(e, data)}>
      <div className="ui form">
        <div className="field">
          <label>Name</label>
          <input {...name} />
        </div>
      </div>
      <div className="ui form">
        <div className="field">
          <label>Email</label>
          <input {...email} />
        </div>
      </div>
      <div className="field">
        <button type="submit" class="ui button" role="button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
