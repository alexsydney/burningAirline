import React, { Component} from 'react';

import axios from 'axios';
import './BA.css';

import { Link } from 'react-router-dom';



const SERVER_URL = 'http://localhost:3000/reservations.json';

const SEATS_AVAI_URL = '';

class Reservation extends Component {
  constructor() {
    super();
     this.state = {
       seats: []
     };
  }

  componentDidMount(){

  const fetchReservations = () => {

      axios.get(SERVER_URL).then( results =>
        this.setState({ seats: results.data }))
    };

    fetchReservations();
  }

  render(){

    return(
      <div>

         <h4> Seats Reservation </h4>
         <Link to="/">Back to Home page</Link>

         <hr/>
         <table>
           <tbody>
             {this.state.seats.map(seat =>
               <tr key={seat.id}>
                   <td><strong>Flight ID: </strong>{seat.flight_id}</td>
                   <td><strong>User: </strong>{seat.user_id}</td>
                   <td><strong>Seat No: </strong>{seat.seat}</td>
                 </tr>
               )}
           </tbody>
         </table>




      </div>
    );
  }

}

export default Reservation;
