import React from 'react';
import PropTypes from 'prop-types';

const ActiveVenueDetails = (props) => {
  if(!props.currentVenue || !props.currentVenue.hasOwnProperty('location')){
    return null
  }
  const { address = '', lat = '', lng =''} = props.currentVenue.location;
  const { phone = '', formattedPhone = '', twitter =''} = props.currentVenue.contact;
  const { name = '', category =''} = props.currentVenue;

  return (
    <div id="detailDisplay" className={'row'}>
      <header className={'col-12'}>
          <h2>{name}</h2>
          <h5>{category}</h5>
      </header>
      <h4 className="">{address}</h4>
      <h4 className="">{formattedPhone}</h4>
      <h4 className="">{twitter}</h4>
    </div>
  );
};

ActiveVenueDetails.propTypes = {
  currentVenue: PropTypes.object.isRequired
}

export default ActiveVenueDetails;
