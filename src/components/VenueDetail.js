import React from 'react';
import PropTypes from "prop-types";
import '../styles/listing.scss';

const VenueDetail = (props) => {
  return (
    <article key={props.i} className={'col-12 col-md-6'}
             onClick={(e) => props.onClickFunction(e, props.currentVenue)}
             style={{backgroundImage: `url(${props.backgroundImageURL})`}}>
      <aside>
        <h3>{props.name}</h3>
        <h4>{props.category}</h4>
      </aside>
    </article>
  );
};

VenueDetail.propTypes = {
  i: PropTypes.number,
  name: PropTypes.string,
  category: PropTypes.string,
  currentVenue: PropTypes.object.isRequired,
  backgroundImageURL: PropTypes.string,
  onClickFunction: PropTypes.func.isRequired,
};

export default VenueDetail;
