import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import '../../styles/drawer.scss';
import * as actions from '../../actions/venueActions';
import ActiveVenueMap from '../ActiveVenueMap';
import ActiveVenueDetails from "../ActiveVenueDetails";

class ActiveVenueContainer extends React.Component {

  render() {
    return (
      <aside id={'rightDrawer'}>
        <ActiveVenueMap/>
        <ActiveVenueDetails/>
      </aside>
    );
  }
}

ActiveVenueContainer.propTypes = {
  currentVenue: PropTypes.number
};

function mapStateToProps(state) {
  return {
    currentVenue: state.root.currentVenue
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
)(ActiveVenueContainer);
