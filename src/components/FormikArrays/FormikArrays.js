import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormikArrays.module.css';
import { Field, Form, Formik, FormikProps } from 'formik';

const MyInput = ({ field, form, ...props }) => {
  return < input {...field} {...props} />
}

export const FormikArrays = () => {
  return (
    <div class="col-md-6">
      <h1>My Form</h1>
      <Formik initialValues={{
        email: '',  color: 'red',firstName: '', lastName: ''
      }}
        onSubmit={
          (values, actions) => {
            setTimeout(() => { alert(JSON.stringify(values, null, 2)); actions.setSubmitting(false) }, 1000)
          }
        }
      >
        {(props: FormikProps<any>) =>
        (
          <Form>
            <Field type="email" name="email" placeholder="email" />
            <Field as="select" name="color">
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
            <Field name="lastName" >
              {
              ({
                field,
                form:{touched,errors},
                meta,
              })=>(
                  <div>
                    <input type="text" placeholder='Email' {...field} />
                    {
                      meta.touched && meta.error && (
                        <div classsname="error">{meta.error}</div>
                      )
                    }
                  </div>
              )
              }
            </Field>
            <Field name="firstName" placeholder="Doe" component={MyInput} />
            <button type="submit">Submit</button>
          </Form>
        )
        }
      </Formik>
    </div >
  )
};

FormikArrays.propTypes = {};

FormikArrays.defaultProps = {};

export default FormikArrays;
