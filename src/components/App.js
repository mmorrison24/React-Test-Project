/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './Header';
import ActiveVenueContainer from './containers/ActiveVenueContainer';
import NotFoundPage from './NotFoundPage';

class App extends React.Component {

  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div className={this.props.isVenueViewerOpen + 'test'}>
        <Header isDrawerOpen={this.props.isVenueViewerOpen}/>
        <div className={'container-fluid'}>
          <div>
            <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
            {' | '}
            <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
            {' | '}
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <ActiveVenueContainer/>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isVenueViewerOpen: state.isVenueViewerOpen
  };
}

/*function mapDispatchToProps(dispatch) {
  return {};
}*/

App.propTypes = {
  children: PropTypes.element,
  isVenueViewerOpen: PropTypes.bool
};

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(App);
