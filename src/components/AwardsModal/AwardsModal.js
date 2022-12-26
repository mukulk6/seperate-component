import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AwardsModal.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProgressBar from 'react-bootstrap/esm/ProgressBar';
import { fontWeight } from '@mui/system';

const AwardsModal = (props) => {
  const categoryBadge = {
    width: "30%",
    textAlign: "center",
    fontSize: "19px",
    fontFamily: "Poppins, Lato, sans-serif",
    fontWeight: "bold"
  }
  return (
    <div class="container">
      {/* <Button variant="primary" onClick={handleShow}>
    Launch demo modal
  </Button> */}
      <Modal {...props} centered={true} size="lg">
        <Modal.Header className={styles.modalTitle} closeButton >
          <Modal.Title style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>Seeker Awards</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ paddingTop: 0 }}>
          <div className={styles.profileinfo}>
            <div class="row align-items-center">
              <div class="col-6 col-sm-3 text-center" style={categoryBadge}>Category</div>
              <div class="col-6 col-sm-3 text-center" style={categoryBadge}>Badge</div>
            </div>
            {/* {GetProfileSeeker.map((data, ind) => {
              return (<tbody key={ind}>{data.userBadges.map((cat) => {
                return (<tr><td className={styles.awardCategory}>{cat.category}</td><td className={styles.awardCategory} style={{ width: "50%" }}>{cat.level === 3 && <img className={styles.badges} src={require('../../images/bronze_badge.png')}></img> || cat.level === 2 && <img className={styles.badges} src={require('../../images/silver_badge.png')} ></img>}</td><td style={{ width: "85%" }}>
                  <ProgressBar min={0} now={cat.currentLevelCount / cat.nextAwardLevelCount * 100} max={100} striped variant="warning" animated style={{height: "20px"}} /></td></tr>)
              })}</tbody>)
            })} */}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
};

AwardsModal.propTypes = {};

AwardsModal.defaultProps = {};

export default AwardsModal;
