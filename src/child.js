import React, { Component } from 'react';
import './App.css';

class Child extends Component {
  constructor() {
    super();
    /* this.state ={
      name : "John"
    } */

    console.log('inside child constructor')
  }

  componentWillMount() {
    /* this.setState({
      name : "Jill"
    }) */
    console.log('inside child componentWillMount')
  }

  componentDidMount() {
    console.log('inside child componentDidMount')
  }
  
  componentWillReceiveProps() {
    console.log('inside child componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('inside child shouldComponentUpdate')
    return true;
  }

  componentWillUpdate() {
    console.log('inside child componentWillUpdate')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('inside child componentDidUpdate')
  }

  render() {
    console.log('inside child render')
    return (
      <div className="App">
        child_name : {this.props.name}
      </div>
    );
  }
}

export default Child;
