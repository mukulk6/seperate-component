import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormComponent.module.css';
import { Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { Autocomplete } from 'formik-mui';
import * as Yup from 'yup';

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (value === 'admin') {
    error = 'Nice try!';
  }
  return error;
}

export const FieldLevelValidationExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, isValidating }) => (
        <Form>
          <Field name="email" validate={validateEmail} />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <Field name="username" validate={validateUsername} />
          {errors.username && touched.username && <div>{errors.username}</div>}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export const FormComponent = () => {
  const options = [{ title: 'The Shawshank Redemption', year: 1994 }]
  return (
    <>
    <FieldLevelValidationExample />
<Field
  name="name"
  component={Autocomplete}
  options={options}
  getOptionLabel={(option: Movie) => option.title}
  style={{ width: 300 }}
  renderInput={(params: AutocompleteRenderInputParams) => (
    <TextField
      {...params}
      // We have to manually set the corresponding fields on the input component
      name="name"
      error={touched['name'] && !!errors['name']}
      helperText={errors['name']}
      label="Autocomplete"
      variant="outlined"
    />
  )}
/>
</>
  );
}

FormComponent.propTypes = {};

FormComponent.defaultProps = {};

export default FormComponent;
