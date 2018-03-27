import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../actions/venueActions';
import VenueDetail from '../VenueDetail'

class VenuesListContainer extends React.Component {

  render() {
    const {venues}= this.props
    let $venuesList;

    const onVenueClicked = (e, currentVenue) => {
      this.props.actions.selectCurrentVenue(currentVenue);
    }

    if(venues && venues.length > 0 && Array.isArray(venues)){
      $venuesList = venues.map((venue, i) => <VenueDetail
        key={i}
        name={venue.name}
        category={venue.category}
        currentVenue={venue}
        backgroundImageURL={venue.backgroundImageURL}
        onClickFunction={onVenueClicked}
      />)
    } else {
      $venuesList = <div className={'col-12 text-center'}><h2 className={'mt-5'}>No Venues Found</h2></div>
    }
    return (
      <main className={'row h-100 justify-content align-items-center'}>
        {$venuesList}
      </main>
    );
  }
}

VenuesListContainer.propTypes = {
  venues: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    venues: state.root.venues
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
)(VenuesListContainer);
