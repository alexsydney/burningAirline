import React, {Component} from 'react';
import PropTypes from 'prop-types';


class SearchForm extends Component {
  constructor() {
    super();

    this.state = { name: '' };

    this._handleSubmit = this._handleSubmit.bind( this );
    this._handleChange = this._handleChange.bind( this );
  }

  _handleSubmit( e ){
    e.preventDefault();
    // console.log( this.state.content );
    this.props.onSubmit( this.state.name );
    console.log(this.state.name)
  }

  _handleChange( e ){
    this.setState({ name: e.target.value });
    console.log(e.target.value);
  }

  render(){
    return (

      <form onSubmit={ this._handleSubmit }>
        <br />

        From: <input type="text" onChange={ this._handleChange }/>
        To: <input type="text" onChange={ this._handleChange }/><br />

        <input type="submit" value="Search Flights" />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
