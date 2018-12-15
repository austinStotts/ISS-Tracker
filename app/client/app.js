import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount () {
    var target = {lat: -25.344, lng: 300.036};
    var map = new google.maps.Map(
      document.getElementById('map'), 
      {zoom: 4, center: target}
    );
    var marker = new google.maps.Marker({position: target, map: map});
  }

  render () {
    return (
      <div><h4>google maps!</h4></div>
    )
  }
}

export default App;