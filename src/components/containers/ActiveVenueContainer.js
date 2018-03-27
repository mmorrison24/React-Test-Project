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
      <aside id={'rightDrawer'} className={this.props.isVenueViewerOpen?'container toggled':'container'}>
        <ActiveVenueMap currentVenue={this.props.currentVenue}/>
        <ActiveVenueDetails onClickCloseBtn={this.props.actions.closeVenueViewer} currentVenue={this.props.currentVenue}/>
      </aside>
    );
  }
}

ActiveVenueContainer.propTypes = {
  isVenueViewerOpen: PropTypes.bool,
  currentVenue: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  console.log('active-venue',state.root.currentVenue)
  return {
    isVenueViewerOpen: state.root.isVenueViewerOpen,
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
