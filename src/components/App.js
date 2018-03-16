/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './Header';
import ActiveVenueContainer from './containers/ActiveVenueContainer';
import NotFoundPage from './NotFoundPage';
import * as actions from '../actions/venueActions'

class App extends React.Component {

  componentDidMount(){
    this.props.actions.fetchVenues();
  }

  render() {
    return (
      <div debug={this.props.isVenueViewerOpen + '-strtest'}>
        <Header isDrawerOpen={this.props.isVenueViewerOpen}/>
        <div className={'container-fluid'}>
          <Switch>
            <Route exact path="/" component={HomePage} />
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
    isVenueViewerOpen: state.isVenueViewerOpen,
    venues: state.venues
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

App.propTypes = {
  isVenueViewerOpen: PropTypes.bool,
  venues: PropTypes.object,
  actions: PropTypes.object.isRequired,
};

App.defaultProps = {
  isVenueViewerOpen: false
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
