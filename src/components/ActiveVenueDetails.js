import React from 'react';
import PropTypes from 'prop-types';

import '../styles/venueDetail.scss';

const ActiveVenueDetails = (props) => {
  if(!props.currentVenue || !props.currentVenue.hasOwnProperty('location')){
    return null
  }
  const { address, city,state, postalCode } = props.currentVenue.location;
  const { phone, formattedPhone, twitter } = props.currentVenue.contact || '';
  const { name, category } = props.currentVenue;

  return (
    <div id="detailDisplay" className={'row'}>
      <header className={'col-12'}>
        <div className={'row'}>
          <div className="col-10">
            <h2>{name}</h2>
            <h5>{category}</h5>
          </div>
          <div className={'col-2 text-right'}>
                <img src={'./styles/assets/ic_webForward@2x.png'} height="36px" className={'mr-4 mt-3'} onClick={props.onClickCloseBtn}/>
          </div>
        </div>

      </header>
      <div className={'col-12 content'}>
        <h4>{address}</h4>
        <h4>{city}, {state} {postalCode}</h4>
        <h4><a href={'tel:'+ phone}>{formattedPhone}</a></h4>
        <h4>@{twitter}</h4>
      </div>
    </div>
  );
};

ActiveVenueDetails.propTypes = {
  currentVenue: PropTypes.object.isRequired,
  onClickCloseBtn: PropTypes.func.isRequired
}

export default ActiveVenueDetails;
