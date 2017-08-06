import React from 'react';
import Maine from './components/me';
import Washington from './components/wa';
import Minnesota from './components/mn';
import Alberta from './components/ab';
import BritishColumbia from './components/bc';
import FormattedTime from './components/localtime';




class Clock extends React.Component {
  constructor() {
    super();
    this.state = { d: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      d: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Family Time</h1>
        <div className="local">
          <FormattedTime />
        </div>
        <div className="me">
          <Maine />
        </div>
        <div className="mn">
          <Minnesota />
        </div>
        <div className="ab">
          <Alberta />
        </div>
        <div className="wa">
          <Washington />
        </div>
        <div className="bc">
          <BritishColumbia />
        </div>
      </div>
    )

  }
}

export default Clock

//need to clean up the clock component and move more html elements into the seperate components
