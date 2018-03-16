import React from 'react';
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import '../../styles/drawer.scss';
import * as actions from '../../actions/venueActions';
import ActiveVenueMap from '../ActiveVenueMap';
import ActiveVenueDetails from "../ActiveVenueDetails";

class MainVenuesContainer extends React.Component {

  render() {
    return (
      <aside id={'rightDrawer'}>
        <ActiveVenueMap/>
        <ActiveVenueDetails/>
      </aside>
    );
  }
}

MainVenuesContainer.propTypes = {};

function mapStateToProps(state) {
  return {
    currVenue: state.currentVenue
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainVenuesContainer);
