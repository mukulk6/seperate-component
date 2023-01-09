import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NavbarComponent.module.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { Nav, NavItem, Image } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import AwardsModal from '../AwardsModal/AwardsModal';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Navbar } from 'react-bootstrap';
import { Avatar } from '@mui/material';

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const avatarDropdownsList = {
    paddingTop: '5px',
    fontSize: '12px',
    height: '27px',
    width: '300px',
    maxWidth: '200px',
    fontWeight: 'normal'
  }

  const avatarIcons = {
    paddingRight: '5px'
  }
  return (
    <nav class="navbar navbar-default navbar-light bg-light navbar-expand-lg fixed-top">
      {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
      <a class="navbar-brand" href="#" className={styles.brandImg}><img src={require('../images/vizerto.png')}></img>
      </a>
      <ul class="navbar-nav ms-auto navbar-right" className={styles.navigationBar}>
        <li class="nav-item active" className={styles.iconCenter}>
          <i class="fa fa-search" aria-hidden="true"></i>
          <a class="nav-link" href="/">Ask a Question <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item" className={styles.iconCenter}>
          <i class="fa fa-fire" aria-hidden="true"></i>
          <NavDropdown
            menuVariant="dark"
            title="Trending"
          >
            <NavDropdown.Item href="/trending"><i class="fa fa-fire" aria-hidden="true"></i> Questions</NavDropdown.Item>
            <NavDropdown.Item href="/keyterms">
              <i class="fa-solid fa-tags"></i> Key Terms
            </NavDropdown.Item>
          </NavDropdown>
        </li>
        <li class="nav-item" className={styles.iconCenter}>
          <i class="fa fa-question-circle-o"></i>
          <NavDropdown
            title="My Searches"
            menuVariant="dark"
          >
            <NavDropdown.Item href="/openseeker"><i class="fa fa-question-circle-o" aria-hidden="true"></i>
              Open
            </NavDropdown.Item>
            <NavDropdown.Item href="/seekerans">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
              Answered
            </NavDropdown.Item>
            <NavDropdown.Item href="/history"><i class="fa fa-book" aria-hidden="true"></i> History</NavDropdown.Item>
          </NavDropdown>
        </li>
        <li class="nav-item" className={styles.iconCenter} eventKey="modal" onClick={handleShow}>
          <AwardsModal show={show} onHide={handleClose} />
          <i class="fa fa-star" aria-hidden="true"></i>
          <a class="nav-link" href="#">Awards <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item" className={styles.className}>
          <div class={styles.fireIcon}>
            <i class="fa fa-fire"></i>
            <span>2/3</span>
          </div>
        </li>
        <li class="nav-item" onClick={() => setLgShow(true)} className={styles.iconCenter}>
          <div className={styles.dropNotification}>
            <i class="fa fa-bell"></i>
          </div>
        </li>
        <li class="nav-item">
          {/* <div class="user-icon">
        <Avatar alt="Remy Sharp" src={require('../images/vizerto.png')} sx={{ width: 35, height: 35, cursor:'pointer', marginTop:'5px' }} />
        </div> */}
          <NavDropdown title={<div class="user-icon"><Avatar alt="Remy Sharp" src={require('../images/vizerto.png')} /></div>}>
            <NavDropdown.Item style={avatarDropdownsList} href="/openseeker"><i style={avatarIcons} class="fa fa-user" aria-hidden="true"></i>Profile</NavDropdown.Item>
            <NavDropdown.Item style={avatarDropdownsList}><i style={avatarIcons} class="fa-solid fa-heart"></i>Favorite</NavDropdown.Item>
            <NavDropdown.Item style={avatarDropdownsList}><i style={avatarIcons} class="fa-solid fa-share-nodes"></i>Question shared</NavDropdown.Item>
            <NavDropdown.Item style={avatarDropdownsList}><i style={avatarIcons} class="fa-solid fa-right-from-bracket"></i>Logout</NavDropdown.Item>
          </NavDropdown>
        </li>
        <li class="nav-item">
          <div class="dropdown dropdown-right">
            <div className={styles.userinfo}>
              <div class="clearfix">
                <span>Mukul Kale</span>
                <select class="form-select form-select-sm" aria-label=".form-select-lg example">
                  <option value="1">Admin</option>
                  <option value="2">CM</option>
                  <option value="3">Expert</option>
                  <option selected value="4">Seeker</option>
                </select>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <div className={styles.username}>
            <span>Group</span>
            <select class="form-select form-select-sm" aria-label=".form-select-lg example">
              <option value="1">Alpha</option>
              <option value="2">GTech</option>
            </select>
          </div>
        </li>
      </ul>

    </nav>
  )
};

NavbarComponent.propTypes = {};

NavbarComponent.defaultProps = {};

export default NavbarComponent;
