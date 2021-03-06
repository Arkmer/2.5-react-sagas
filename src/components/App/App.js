import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import { createCipher } from 'crypto';
// import { call, put } from 'redux-saga/effects';

class App extends Component {
  state = {
    newElement: '',
  }

  handleChange = (event) => {
    this.setState({
      newElement: event.target.value,
    });
  }

  getElements = () => {
    this.props.dispatch({ type: 'FETCH_ELEMENTS' })
  }

  componentDidMount() {
    this.getElements();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/element', this.state).then(() => {
      this.getElements();
      this.setState({
        newElement: '',
      });
    })
    .catch(error => {
      console.log('Element POST', error);
    })
  };

  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch({ type: 'BUTTON_ONE' })}>Button One</button>
        <button onClick={() => this.props.dispatch({ type: 'BUTTON_TWO' })}>Button Two</button>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newElement} onChange={this.handleChange} />
          <input type='submit' value='Add Element' />
        </form>
        <pre>{JSON.stringify(this.props.reduxState)}</pre>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);