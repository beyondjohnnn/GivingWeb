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
    loadingElement: <div style={{ height: `80%` }} />,
    containerElement: <div style={{ width: `100%`, height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>(
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 55.9471883, lng: -3.2018061 }}
  >
  <Marker position={{ lat: 55.9471883, lng: -3.2018061 }} style={{ height: `#8834b5` }}/>
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
