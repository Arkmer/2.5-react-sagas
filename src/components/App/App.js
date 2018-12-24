import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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
    axios.get('/api/element').then(response => {
      this.props.dispatch({ type: 'SET_ELEMENTS', payload: response.data });
    })
    .catch(error => {
      console.log('Element GET', error);
    });
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
    });
  }

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