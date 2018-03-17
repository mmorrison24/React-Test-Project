import React from 'react';
import PropTypes from 'prop-types';
import '../styles/header.scss';

// Since this component is simple and static, there's no parent container for it.
const Header = () => {
  return (
    <header id={'Header'} className={'row justify-content-md-center align-items-end'}>
      <div className={'col'}>
        &nbsp;
      </div>
      <div className={'col-6 text-center'}>
        <h2>Lunch Tyme</h2>
      </div>
      <div className={'col text-right'}>
        <img src={'./styles/assets/icon_map@2x.png'} width="40px"/>
      </div>
    </header>
  );
};

Header.propTypes = { isDrawerOpen: PropTypes.bool };
export default Header;
