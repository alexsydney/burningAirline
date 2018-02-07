import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BA.css';

import AirplaneForm from './AirplaneForm';

const SERVER_URL = 'http://localhost:3000/airplanes.json'

class Airplane extends Component {

  constructor(){
    super();
    this.state = {
      planes: []
    };

    this.savePlane = this.savePlane.bind( this );
  }

  savePlane( plane ){
    console.log('savePlane: ', plane);

    // Rails:   Secret.create content: secret
    axios.post(SERVER_URL, { name: plane }).then( results => {
      this.setState({
        planes: [results.data, ...this.state.planes ]
      });
    });

  }


  componentDidMount(){

  // This code will ONLY run just before the component is about to be
  // mounted on the app, i.e. added to the DOM

  const fetchPlanes = () => {
    // Make AJAX request to our Rails API endpoint
    // ...and save the response into our component state
    axios.get(SERVER_URL).then( results => this.setState({planes: results.data }) );
    // setTimeout( fetchPlanes, 10000 );
    // console.log(this.state.planes[0])
  };

  fetchPlanes();
}

  render() {
    return (
      <div>
        <h1>Airplanes</h1>
        <nav><Link to="/">Search Flights</Link></nav>
        <AirplaneForm onSubmit={ this.savePlane }/>

        <hr />

        <h3>Existing Planes</h3>
        <table id="planesT">
          <tbody>
            {this.state.planes.map(plane =>
              <tr key={plane.id}>
                  <td><strong>Plane: </strong>{plane.name}</td>
                  <td><strong>No. of Rows: </strong>{plane.rows}</td>
                  <td><strong>No. of Columns: </strong>{plane.columns}</td>
                </tr>
              )}
          </tbody>
        </table>

      </div>
    );

  }
}

export default Airplane;
