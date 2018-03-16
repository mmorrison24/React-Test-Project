import React from 'react';
import PropTypes from "prop-types";

const VenueDetail = (props) => {
  return (
      <section key={props.i}>{props.name}</section>
  );
};

VenueDetail.propTypes = {
  i: PropTypes.number.isRequired,
  name: PropTypes.string,
};

export default VenueDetail;
