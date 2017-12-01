import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class Stopwatch extends Component {
  constructor(props) {
      super(props);
      this.state = {
          time: 0,
          newTime: 0
      }
  }
  
  changeTime() {
    this.setState({time: this.state.newTime})
  }

  componentWillMount() {
    this.setState({time: this.state.newTime-1});
    }
    
    componentDidMount() {
      setInterval(() => this.changeTime(this.state.time), 1000)  
    }
  

  render() {
    return (
      <div>
        <div className="App-title">
          {this.state.time}
          <Form inline>
            <FormControl 
              className="Deadline-input" 
              onChange={event=> this.setState({newTime: event.target.value})} 
              placeholder='stopwatch time' type="text"/>
              <Button 
                onClick= {()=> this.changeTime()}>submit
              </Button>
            </Form>


        </div>
      </div>
    )
  }
}

export default Stopwatch;