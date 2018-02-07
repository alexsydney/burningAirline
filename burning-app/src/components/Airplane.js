import React, {Component} from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';

const SERVER_URL = 'http://localhost:3000/airplanes.json'

function Gallery(props){
  console.log(props);
  return (
    <div>
      {
         props.planes.map( s => <p key={ s.id }></p>)
       }

    </div>
  );
}

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
    axios.post(SERVER_URL, { content: plane }).then( results => {
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
    setTimeout( fetchPlanes, 10000 );
    console.log(this.state.planes[0])
  };

  fetchPlanes();
}


  render() {
    return (
      <div>
        <h1>View planes</h1>
        <SearchForm onSubmit={ this.savePlane }/>

        <hr />
        <Gallery planes={this.state.planes}/>
        <hr />
        <ul>
          {this.state.planes.map(plane =>
            <li key={plane.id}>{plane.name}, {plane.rows}, {plane.columns}</li>
          )}
        </ul>

      </div>
    );

  }
}

export default Airplane;
