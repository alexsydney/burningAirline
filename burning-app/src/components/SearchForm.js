import React, {Component} from 'react';
import PropTypes from 'prop-types';


class SearchForm extends Component {
  constructor() {
    super();

    this.state = { origin: '', destination: '' };

    this._handleSubmit = this._handleSubmit.bind( this );
    this._handleOriginChange = this._handleOriginChange.bind( this );
    this._handleDestinationChange = this._handleDestinationChange.bind( this );

  }

  _handleSubmit( e ){
    e.preventDefault();
    // console.log( this.state.content );
    this.props.onSubmit( this.state.origin, this.state.destination );
    console.log(this.state.name)
  }

  _handleOriginChange( e ){
    this.setState({ origin: e.target.value });
    console.log(e.target.value);
  }
  _handleDestinationChange( e ){
    this.setState({ destination: e.target.value });
    console.log(e.target.value);
  }

  render(){
    return (

      <form onSubmit={ this._handleSubmit }>
        <br />

        From: <input type="text"  onChange={ this._handleOriginChange }/>
        To: <input type="text"  onChange={ this._handleDestinationChange }/><br />

        <input type="submit" value="Search Flights" />
      </form>
    );
  }
 }

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
