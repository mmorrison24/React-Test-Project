import React from 'react';
import PropTypes from "prop-types";

import '../styles/listing.scss';


const VenueDetail = (props) => {
  return (
    <article key={props.i} className={'col-12'} style={{'background-image': `url(${props.backgroundImageURL})`}}>
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
  backgroundImageURL: PropTypes.string,
};

export default VenueDetail;
