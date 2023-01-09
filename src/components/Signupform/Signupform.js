import React from 'react';
import PropTypes from 'prop-types';
import styles from './Signupform.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors;
}

const Signupform = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <div class="col-md-6">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='firstName'>First Name*</label>
        <input id={styles["firstName"]} type="text" name="firstName" {...formik.getFieldProps('firstName')} value={formik.values.firstName} />
        {formik.touched.firstName && formik.errors.firstName ? <div style={{ color: 'red' }}>{formik.errors.firstName}</div> : null}
        <label htmlFor='lastName'>Last Name*</label>
        <input id={styles["lastName"]} type="text" name="lastName" value={formik.values.lastName} {...formik.getFieldProps('lastName')} />
        {formik.touched.lastName && formik.errors.lastName ? <div style={{ color: 'red' }}>{formik.errors.lastName}</div> : null}
        <label htmlFor='email'>Email*</label>
        <input id={styles["email"]} type="email" value={formik.values.email} {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}
        <button id={styles["btnsubmit"]} type="submit">Submit</button>
      </form>
    </div>
  )
};

Signupform.propTypes = {};

Signupform.defaultProps = {};

export default Signupform;
