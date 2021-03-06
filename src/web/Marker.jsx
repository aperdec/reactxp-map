/*
* Marker.jsx
* Copyright (c) Luxbyte SARLS. All rights reserved.
* Licensed under the MIT license.
*
*/

let React = require('react');
let ReactDOM = require('react-dom');

import { Marker as MapMarker } from "react-google-maps"

class Marker extends React.Component {

  getCoordinate = (e, callback) => {
    if (callback) {
      let coordinate = {latitude: e.latLng.lat(), longitude: e.latLng.lng()};
      return callback(coordinate);
    }
  }

  render() {
    return (
      <MapMarker position={{ lat: this.props.latitude, lng: this.props.longitude }}
                 title={this.props.title}
                 icon={"https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|"+(this.props.color || "FE7569")}
                 onClick={(e) => this.getCoordinate(e, this.props.onPress)}
      />
    );
  }
}

module.exports = Marker;
