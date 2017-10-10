import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import css from './GoogleMapComponent.scss'

import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const GoogleMaper = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBxB0T4GfkMjt_VV9yKDqYvhK3DizksacI&callback&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>(
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 55.947, lng: -3.201 }}
  >
  <Marker position={{ lat: 55.947, lng: -3.201 }} />
  </GoogleMap>
))

class GoogleMapComponent extends React.PureComponent {

  componentDidMount() {
  }

  render() {
    return (
      <GoogleMaper />
    )
  }
}

export default GoogleMapComponent
