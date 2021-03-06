import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 25, 2017",
      newDeadline: '',
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
    <div className='App'>
      <div className='App-title'>Countdown to {this.state.deadline}</div>
      <Clock deadline = {this.state.deadline} />
      <Form>
        <FormControl
          className="Deadline-input" 
          onChange={ event => this.setState({newDeadline: event.target.value}) } 
          placeholder='Enter new date - must click button in this version' type="text"/>
        <Button 
          onClick= { () => this.changeDeadline() }>submit
        </Button>
      </Form>
      {/* <Stopwatch /> */}
    </div>
    )
  }
}
export default App;