import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import '../../styles/listing.scss';
import * as actions from '../../actions/venueActions';

class VenuesListContainer extends React.Component {

  render() {

    const {venues}= this.props
    return (
      <main>
        <h1>listing here</h1>
        {(() => {
          if(venues){
            return this.props.venues.map((venue,i) =>
              <section key={i}>{venue.name}</section>)
            }
        })()}
      </main>
    );
  }
}

VenuesListContainer.propTypes = {
  venues: PropTypes.array.isRequired
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
