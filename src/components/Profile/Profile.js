import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import { SigninContext } from '../../contexts/SigninContext';

function Profile() {
  const { userName } = useContext(SigninContext)
  return (
    <div className={styles.Profile} class="d-flex justify-content-center mb-3 display-2">
      {userName}
    </div>
  )
};

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
