import React, { Component } from 'react';
import './App.css';
import Child from './child.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name : "John"
    }

    console.log('inside constructor')
  }

  componentWillMount() {
    this.setState({
      name : "Jill"
    })
    console.log('inside componentWillMount')
  }

  componentDidMount() {
    console.log('inside componentDidMount')
  }

  componentWillReceiveProps() {
    console.log('inside componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('inside shouldComponentUpdate')
    return true;
  }

  componentWillUpdate() {
    console.log('inside componentWillUpdate')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('inside componentDidUpdate')
  }



  changeState() {
    this.setState({
      name : "Dana"
    });
    console.log('inside changeState')
  }

  render() {
    console.log('inside render')
    return (
      <div className="App">
        <Child name={this.state.name} />
        <button onClick={this.changeState.bind(this)}>Change State</button>
      </div>
    );
  }
}

export default App;
