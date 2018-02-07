import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BA.css';

import SearchForm from './SearchForm';


const SERVER_URL = 'http://localhost:3000/flights.json';
const SEARCH_URL = 'http://localhost:3000/search.json';

// function Gallery(props){
//   console.log(props);
//   return (
//     <div>
//       {
//          props.planes.map( s => <p key={ s.id }></p>)
//        }
//
//     </div>
//   );
// }

class Search extends Component {

  constructor(){
    super();
    this.state = {
      flights: []
    };

    // this.saveFlight = this.saveFlight.bind( this );
    this.listFlight = this.listFlight.bind(this);
  }

  listFlight( origin,destination ){


      axios.post(SEARCH_URL, {  origin, destination }).then( results => {

        console.log('results', results);
        this.setState({
          flights: results.data.flights
        });
        console.log(results.data);

      });



    }



  // saveFlight( flight ){
  //   console.log('saveFlight: ', flight);
  //
  //   // Rails:   Secret.create content: secret
  //   axios.post(SERVER_URL, { flight }).then( results => {

  //   });
  //
  // }


  componentDidMount(){

  // This code will ONLY run just before the component is about to be
  // mounted on the app, i.e. added to the DOM

  const fetchFlights = () => {
    // Make AJAX request to our Rails API endpoint
    // ...and save the response into our component state
    axios.get(SERVER_URL).then( results => this.setState({flights: results.data }) );
    // setTimeout( fetchFlights, 10000 );
    // console.log(this.state.planes[0])
  };

  fetchFlights();
}


  render() {
    return (
      <div>
        <h1>Search Flights</h1>
        <nav>
          <ul>
            <li><Link to="/airplanes">Airplanes</Link></li>
          </ul>
        </nav>

        <SearchForm onSubmit= {this.listFlight}/>
        <hr />

        <table>
            <tbody>
            {this.state.flights.map(flight =>
              <tr key={flight.id}>
                <td><strong>Date: </strong>{flight.date}</td>
                <td><strong>Flight number: </strong>{flight.flight_no}</td>
                <td><strong>Origin: </strong>{flight.origin}</td>
                <td><strong>Destination: </strong>{flight.destination}</td>
                <td><strong>Plane: </strong>{flight.airplane_id}</td>
              </tr>
            )}
            </tbody>
          </table>

      </div>
    );

  }
}

export default Search;
