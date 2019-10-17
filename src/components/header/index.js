import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/graphics/logo.png';
import './styles.scss';

const Header = props => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoImg" src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
