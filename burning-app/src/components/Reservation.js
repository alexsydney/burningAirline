import React, { Component} from 'react';

import axios from 'axios';

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
         { this.state.seats.map( seat =>
           <li key={seat.id}>flight_Id:{seat.flight_id}, User_id: {seat.user_id},
           Seat No: {seat.seat} </li>

         )}
      </div>
    );
  }

}

export default Reservation;
