import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Step extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        '1) fist you take two pieces of bread,peanut butter,jelly and a butter knife', 
        '2) lay the bread down', 
        '3) then you dip the knife in the peanut butter and spread it on the one piece of bread', 
        '4) dip the knife in the jelly and spread it one the other slice of bread',
        '5) put the two pieces of bread together and enjoy' 
      ],
      index: 0,
      button: 'next'
   };
  }

  render() {
      return (
        <div>
          <div className="step-text">{this.state.steps[this.state.index]}</div>
          <Button
            bsStyle="success"
            bsSize="large"
            onClick={event => this.setState({ index: this.state.index + 1 })}>
            { this.state.button }
          </Button>
        </div>
      );
  }
}

export default Step;
