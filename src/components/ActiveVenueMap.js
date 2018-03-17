import React, { Component } from 'react';
import PropTypes from "prop-types";

import '../styles/venueDetail.scss';

export default class ActiveVenueMap extends Component {

  componentDidMount() {
    this.map = new google.maps.Map( this.$map , {
      center: {
        lat: 0,
        lng: 0},
      zoom: 17
    })
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentVenue && nextProps.currentVenue.hasOwnProperty('location')){
      this.lat = nextProps.currentVenue.location.lat || 0;
      this.lng = nextProps.currentVenue.location.lng || 0;
      console.log('wrp', this.lat, this.lng)

      this.map.panTo({
        lat: this.lat,
        lng: this.lng
      })
    }
  }

  render(){
    return (
      <div id="map" ref={(el) => this.$map = el} className={'row'}>{this.lat} {this.lat}</div>
    );
  }

}

ActiveVenueMap.propTypes = {
  currentVenue: PropTypes.object.isRequired
}


