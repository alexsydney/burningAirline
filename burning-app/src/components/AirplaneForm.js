import React, {Component} from 'react';
import PropTypes from 'prop-types';


class AirplaneForm extends Component {
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

        Airplane Name: <input type="text" onChange={ this._handleChange }/>
        Rows: <input type="number" onChange={ this._handleChange }/>
        Columns: <input type="number" onChange={ this._handleChange }/><br />

        <input type="submit" value="Create Airplane" />
      </form>
    )
  }
}

AirplaneForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AirplaneForm;
