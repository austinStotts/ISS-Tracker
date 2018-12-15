import React, { Component } from 'react';
import {Map, InfoWindow, Circle, Marker, GoogleApiWrapper} from 'google-maps-react';
import Axios from 'axios';
import path from 'path';
export class MapContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      lat: '50',
      lng: '50',
      info: false
    }
    this.change = this.change.bind(this);
  }

  change () {
    Axios.post('http://localhost:3000/add')
    .then(res => {
      let lat = res.data.lat
      let lng = res.data.lng
      this.setState({lat:lat, lng:lng})
    })
  }

  componentWillMount () {
    Axios.post('http://localhost:3000/add')
    .then(res => {
      console.log(res.data)
      let lat = res.data.lat
      let lng = res.data.lng
      this.setState({lat:lat, lng:lng})
    })
    setInterval(() => {
      Axios.post('http://localhost:3000/add')
      .then(res => {
        console.log(res.data);
        let lat = res.data.lat
        let lng = res.data.lng
        this.setState({lat:lat, lng:lng})
      })
    },60000)
  }

  render() {
    return (
      <div>
      <div className='map'>
        <Map 
          google={this.props.google} zoom={4}
          style={{ height: '100%', width: '100%'}}
          onClick={this.change}
          initialCenter={{lat: this.state.lat,lng: this.state.lng}}
          center={{lat: this.state.lat,lng: this.state.lng}}
          >
            <Marker
              title={'Internation Space Station'}
              name={'ISS'}
              position={{lat: this.state.lat, lng: this.state.lng}} 
            >
            </Marker>
        </Map>
      </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('')
})(MapContainer)