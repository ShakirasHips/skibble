/**
 * React renderer.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import the styles here to process them with webpack
import '@public/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Fade } from 'react-bootstrap'
import Confetti from 'react-dom-confetti'


const ConfettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 20,
  elementCount: 200,
  dragFriction: 0.1,
  duration: 3000,
  stagger: 2,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};


class ClickMe extends React.Component<{}>{
  state = {fade: false};
  
  componentDidUpdate() {
    if (this.state.fade) {
      setTimeout(() => {
        this.reset()
      },3000)
    }
  }

  reset(): void {
    this.setState(() => ({
      fade: false
    }))
  }

  ClickHandler(): void {
    this.setState(state => ({
      fade: true
    }))
  }

  render(): any {
    const {fade} = this.state;

    return (
      <div className='centered'>
        <Button variant="primary" onClick={() => this.ClickHandler()}>
          {this.state.fade ? 'Katherine' : 'Who does Jayden love?'}
        </Button> 
        <Confetti active={ fade } config={ ConfettiConfig }></Confetti>   
      </div>
      )
  }
}
ReactDOM.render(
  <ClickMe />,
  document.getElementById('app')
);
