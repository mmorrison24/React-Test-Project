import React from 'react';
import PropTypes from 'prop-types';

import '../styles/venueDetail.scss';

const ActiveVenueDetails = (props) => {
  if(!props.currentVenue || !props.currentVenue.hasOwnProperty('location')){
    return null
  }
  const { address, city,state, postalCode,  lat, lng} = props.currentVenue.location;
  const { phone, formattedPhone, twitter} = props.currentVenue.contact;
  const { name, category} = props.currentVenue;

  return (
    <div id="detailDisplay" className={'row'}>
      <header className={'col-12'}>
          <h2>{name}</h2>
          <h5>{category}</h5>
      </header>
      <div className={'col-12 content'}>
        <h4>{address}</h4>
        <h4>{city}, {state} {postalCode}</h4>
        <h4>{formattedPhone}</h4>
        <h4>@{twitter}</h4>
      </div>
    </div>
  );
};

ActiveVenueDetails.propTypes = {
  currentVenue: PropTypes.object.isRequired
}

export default ActiveVenueDetails;
