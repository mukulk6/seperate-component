import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Signin.module.css';
import { SigninContext } from '../../contexts/SigninContext';

function Signin() {
  const { userName, setUserName, setDisplayProfile } = useContext(SigninContext)
  return (
    <>
      <h2 className="mb-3 text-center">
        React Js Context API Send Data Parent to Child Component Example
      </h2>
      <main className="form-signin">
        <div className="d-flex justify-content-center mb-3">{userName}</div>
        <h2 className="h3 mb-3 fw-normal">Please sign in</h2>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            onChange={(event) => {
              setUserName(event.target.value)
            }}
          />
          <label>Name</label>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          onClick={() => {
            {
              userName && setDisplayProfile(true)
            }
          }}
        >
          Sign in
        </button>
      </main>
    </>
  )
};

Signin.propTypes = {};

Signin.defaultProps = {};

export default Signin;
