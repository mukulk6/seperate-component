import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalProvider.module.css';
import { useSelector } from 'react-redux';
import ModalComponent from '../ModalComponent/ModalComponent';

const ModalProvider = ({ children }) => {
  const modal = useSelector(state => state.modal);
  return (
    <ModalComponent isVisible={modal.isVisible} title={modal.title} >
      {children}
    </ModalComponent>
  )
};

ModalProvider.propTypes = {};

ModalProvider.defaultProps = {};

export default ModalProvider;
